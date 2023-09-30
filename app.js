mongoose.connect(
  "mongodb://127.0.0.1:27017/ihx-clm",
  // "mongodb+srv://shabhari:5ppK5MSgWZQUs91h@slate.1cmesxy.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

import express, { request } from "express";
import expressWebsockets from "express-ws";
import { Server } from "@hocuspocus/server";
import { slateNodesToInsertDelta, yTextToSlateElement } from "@slate-yjs/core";
import { Logger } from "@hocuspocus/extension-logger";
import * as Y from "yjs";
import mongoose from "mongoose";
import sizeof from "object-sizeof";

const initialValue = [
  {
    type: "page",
    children: [
      {
        type: "paragraph",
        children: [{ type: "text", text: "start typing...." }],
      },
    ],
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
const Document123321 = mongoose.model("Document123321", {
  _docid: String,
  content: String,
});

Document123321.findOneAndUpdate(
  { _docid: Math.random() },
  { content: '123' },
  { upsert: true, new: true } // Set upsert to true to create if not exists and new to true to return the updated document
)
  .then((updatedDocument) => {
    if (updatedDocument) {
    } else {
      // Document with the specified _docid didn't exist and has been created
      // console.log("Created new document.");
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    // Close the MongoDB connection when done
    // console.log(`Entering the mongoose document finally codeBlock`);
    mongoose.connection.close();
  });

const Document = mongoose.model("Document", {
  _docid: String,
  content: String,
});

// Configure Hocuspocus
const server = Server.configure({
  port: 1234,
  timeout: 30000,
  // Add logging
  // extensions: [new Logger()],

  async onStoreDocument(data) {
    console.log("##### onStoreDocument #####");
    const sharedRoot = data.document.get("content", Y.XmlText);

    const slateElementOnStore = yTextToSlateElement(sharedRoot);

    const dataToStore = slateElementOnStore.children;

    // console.log("dataToStore \n", dataToStore);
    // console.log("typeOf dataToStore\n", typeof dataToStore);
    console.log("sizeOf dataToStore\n", sizeof(dataToStore));

    const dataToStoreJsonString = JSON.stringify(dataToStore);
    // console.log("dataToStoreJsonString \n", dataToStoreJsonString);
    // console.log("typeOf dataToStoreJsonString\n", typeof dataToStoreJsonString);
    console.log(
      "sizeOf dataToStoreJsonString\n",
      sizeof(dataToStoreJsonString)
    );

    const { docId } = data.context;

    Document.findOneAndUpdate(
      { _docid: docId },
      { content: dataToStoreJsonString },
      { upsert: true, new: true } // Set upsert to true to create if not exists and new to true to return the updated document
    )
      .then((updatedDocument) => {
        if (updatedDocument) {
        } else {
          // Document with the specified _docid didn't exist and has been created
          // console.log("Created new document.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        // Close the MongoDB connection when done
        // console.log(`Entering the mongoose document finally codeBlock`);
        // mongoose.connection.close();
      });

    return data.document;
  },

  async onLoadDocument(data) {
    console.log("##### onLoadDocument #####");
    // console.log("data.document \n", data.document); // Load the initial value in case the document is empty
    console.log("data.document.name \n", data.document.name);

    const { docId } = data.context;

    Document.findOne({ _docid: docId })
      .then((foundDocument) => {
        if (foundDocument) {
          const parsedContent = JSON.parse(foundDocument.content);

          // Update the Slate.js document with the parsed content
          const insertDelta = slateNodesToInsertDelta(parsedContent);

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
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        // Close the MongoDB connection when done
        // mongoose.connection.close();
      });

    return data.document;
  },
  async onConnect(connection, request) {
    console.log(`request.context\n`, connection.context);
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

// A basic http route
app.get("/ws", (request, response) => {
  response.send("Hello World!");
});

// Add a websocket route for Hocuspocus
// Note: make sure to include a parameter for the document name.
// You can set any contextual data like in the onConnect hook
// and pass it to the handleConnection method.
app.ws("/ws/collaboration/:document", (websocket, request) => {
  console.log("Entering the socket endpoint");
  console.info(request.path);
  const docId = request.params.document;
  console.log(docId);
  const context = {
    // user: {
    //   id: 1234,
    //   name: "Jane",
    // },
    docId,
  };

  server.handleConnection(websocket, request, context);
});

// Start the server
app.listen(1234, () => console.log("Listening on http://127.0.0.1:1234"));
