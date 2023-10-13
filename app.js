mongoose
  .connect(
    // "mongodb+srv://parikshith:Lqs55hsYgDJ66EAH@ihx.rgbcqfy.mongodb.net/ihx",
    "mongodb://127.0.0.1:27017/ihx-clm?replicaSet=rs0",
    //"mongodb+srv://shabhari:5ppK5MSgWZQUs91h@slate.1cmesxy.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

import express, { request } from "express";
import expressWebsockets from "express-ws";
import { Server } from "@hocuspocus/server";
import { slateNodesToInsertDelta, yTextToSlateElement } from "@slate-yjs/core";
import { Logger } from "@hocuspocus/extension-logger";
import * as Y from "yjs";
import mongoose from "mongoose";
import sizeof from "object-sizeof";
import { ObjectId } from "mongodb";

const initialValue = [

  {
    type: "paragraph",
    children: [{ type: "text", text: "" }],
  },

];
const initialValue2 = [
  {
    type: "page",
    children: [
      {
        type: "paragraph",
        children: [{ type: "text", text: "start typing FROM DB...." }],
      },
    ],
  },
];




// Configure Hocuspocus
const server = Server.configure({
  port: 1234,
  timeout: 30000,
  // Add logging
  // extensions: [new Logger()],

  async onStoreDocument(data) {
    // console.log("##### onStoreDocument #####");
    const sharedRoot = data.document.get("content", Y.XmlText);

    const slateElementOnStore = yTextToSlateElement(sharedRoot);

    const dataToStore = slateElementOnStore.children;
    // console.log("sizeOf dataToStore\n", dataToStore);

    const dataToStoreJsonString = JSON.stringify(dataToStore);

    // console.log(
    //   "sizeOf dataToStoreJsonString\n",
    //   sizeof(dataToStoreJsonString)
    // );

    const { docId } = data.context;

    const Document = mongoose.connection.db.collection("documents");

    const objId = new ObjectId(data.document.name);

    const result = await Document.findOne({ _id: objId });

    // console.log("Document\n", result);

    const head_document_version = result.head_document_version;

    // console.log("result.head_document_version\n", head_document_version);

    const documentVersions =
      mongoose.connection.db.collection("documentversions");

    const updatedContent = await documentVersions.findOneAndUpdate(
      { _id: head_document_version },
      { $set: { body: dataToStore } },
      { upsert: true, new: true }
    );

    // console.log("documentVersion\n", updatedContent);

    return data.document;
  },

  async onLoadDocument(data) {
    // console.log("##### onLoadDocument #####");
    // console.log("data.document \n", data.document); // Load the initial value in case the document is empty
    // console.log("data.document.name \n", data.document.name);

    const { docId } = data.context;

    const Document = mongoose.connection.db.collection("documents");

    const objId = new ObjectId(data.document.name);

    // console.log("typeof data.document.name\n", objId);

    const result = await Document.findOne({ _id: objId });

    // console.log("Document\n", result);

    const head_document_version = result.head_document_version;
    // console.log("result.head_document_version\n", head_document_version);

    const documentVersions =
      mongoose.connection.db.collection("documentversions");
    // {_id: ObjectId("64e2f658006354046b294d25")}

    const content = await documentVersions.findOne({
      _id: head_document_version,
    });

    // console.log("documentVersion\n", content);

    const doc = content.body;

    // console.log("doc Contents\n", doc);

    if (doc.length > 0) {
      const insertDelta = slateNodesToInsertDelta(doc);

      const sharedRoot = data.document.get("content", Y.XmlText);
      // console.log(`sharedRoot \n`, sharedRoot);
      sharedRoot.applyDelta(insertDelta);
    } else {
      // Document with the specified _docid does not exist

      const insertDelta = slateNodesToInsertDelta(initialValue);

      const sharedRoot = data.document.get("content", Y.XmlText);
      sharedRoot.applyDelta(insertDelta);

      const slateElement = yTextToSlateElement(sharedRoot);
    }

    return data.document;
  },
  async onConnect(connection, request) {
    // console.log(`request.context\n`, connection.context);
  },
  async connected() {
    console.log("connections:", server.getConnectionsCount());
  },
  async onDisconnect(data) {
    // Output some information
    console.log(`disconnected:`, server.getConnectionsCount());
  },
});

// Setup your express instance using the express-ws extension
const { app } = expressWebsockets(express());
const connectedClients = new Set();

// A basic http route
app.get("/ws", async (request, response) => {
  response.send("Hello World!");
});

// Add a websocket route for Hocuspocus
// Note: make sure to include a parameter for the document name.
// You can set any contextual data like in the onConnect hook
// and pass it to the handleConnection method.
app.ws("/ws/collaboration/:document", (websocket, request) => {
  // console.log("Entering the socket endpoint");
  // console.info(request.path);
  const docId = request.params.document;
  // console.log(docId);
  const context = {
    docId,
  };
  server.handleConnection(websocket, request, context);
});

app.ws("/ws/variables/:document", (websocket, request) => {
  console.log('Connected:', request.params.document);
  connectedClients.add(websocket);

  websocket.on('message', (message) => {
    try {
      const parsedMessage = JSON.parse(message);  
      console.info(parsedMessage)
      if (parsedMessage.event) {
        console.log('Received a custom event from a client:', parsedMessage.data);

        connectedClients.forEach(client => {
          if (client !== websocket) {
            // Don't send the message back to the sender
            client.send(JSON.stringify({ event: parsedMessage.event, data: parsedMessage.data }));
          }
        });
      }
    } catch (error) {
      console.error('Error parsing message:', error);
    }
  });

  // Handle WebSocket disconnect
  websocket.on('close', () => {
    console.log('Disconnected:', request.params.document);
    connectedClients.delete(websocket);
  });
});




// Start the server
const PORT = 1234;
app.listen(PORT, () => console.log(`Listening on http://127.0.0.1:${PORT}`));
