mongoose.connect(
  "mongodb+srv://shabhari:5ppK5MSgWZQUs91h@slate.1cmesxy.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// const Document = mongoose.model('Document', {
//   _docid: String,
//   content: String,
// });
// // Start the server
// // server.enableMessageLogging();
// server.listen();
// // server.handleConnection()

import express, { request } from "express";
import expressWebsockets from "express-ws";
import { Server } from "@hocuspocus/server";
import { slateNodesToInsertDelta, yTextToSlateElement } from "@slate-yjs/core";
import { Logger } from "@hocuspocus/extension-logger";
import * as Y from "yjs";
import mongoose from "mongoose";
// import bodyParser from "body-parser";

// let docId;

const initialValue = [
  {
    type: "page",
    children: [
      {
        type: "paragraph",
        children: [{ type: "text", text: "start typing...." }],
      },
      // {
      //   type: "paragraph",
      //   children: [{ type: "text", text: "start123345" }],
      // },
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
      // {
      //   type: "paragraph",
      //   children: [{ type: "text", text: "start123345" }],
      // },
    ],
  },
];

const Document = mongoose.model("Document", {
  _docid: String,
  content: String,
});

// const newDocument = new Document({
//   _docid: '123123',
//   content: 'qweqwe'
// })

// newDocument.save()
//   .then((savedBook) => {
//     console.log("Saved book:", savedBook);

//     // Retrieve all books from the database
//     return Document.find({});
//   })
//   .then((allBooks) => {
//     console.log("All books in the database:", allBooks);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   })
//   .finally(() => {
//     // Close the MongoDB connection when done
//     mongoose.connection.close();
//   });
// Start the server
// server.enableMessageLogging();
// server.listen();
// server.handleConnection()

// Configure Hocuspocus
const server = Server.configure({
  // name: "6512c4b6d56d9fbb7be2b9a1",
  port: 1234,
  timeout: 30000,
  // Add logging
  // extensions: [new Logger()],

  // async onChange(data) {
  //   // Log the updated data.document
  //   console.log("Updated Document:", data.document.toJSON());

  //   // You can also access specific parts of the document, e.g., content
  //   // console.log('Updated Content:', data.document.get('content'));

  //   // Return the updated document
  //   return data.document;
  // },
  async onStoreDocument(data) {
    console.log("##### onStoreDocument #####")
    // console.log(`data.document inside onStoreDocument inside provier\n`, data);
    const sharedRoot = data.document.get("content", Y.XmlText);

    // console.log("SharedRoot inside onStoreDocumentHook\n", sharedRoot);

    const slateElementOnStore = yTextToSlateElement(sharedRoot);

    const dataToStore = slateElementOnStore.children;

    // console.log("dataToStore \n", dataToStore);
    // console.log("typeOf dataToStore\n", typeof dataToStore);

    const dataToStoreJsonString = JSON.stringify(dataToStore);
    // console.log("dataToStoreJsonString \n", dataToStoreJsonString);
    // console.log("typeOf dataToStoreJsonString\n", typeof dataToStoreJsonString);

    const { docId } = data.context;
    //   docId = data.requestParameters.get("docId");
    //   const token = data.requestParameters.get("token");
    // console.log(`docId inside onStoreDocument\n`, docId);

    // mongoose.connect(
    //   "mongodb+srv://shabhari:5ppK5MSgWZQUs91h@slate.1cmesxy.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp",
    //   {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   }
    // );
    Document.findOneAndUpdate(
      { _docid: docId },
      { content: dataToStoreJsonString },
      { upsert: true, new: true } // Set upsert to true to create if not exists and new to true to return the updated document
    )
      .then((updatedDocument) => {
        // console.log(`Entering the mongoose document then codeBlock`);
        if (updatedDocument) {
          // Document with the specified _docid exists and has been updated
          // console.log("Updated document:", updatedDocument);
        } else {
          // Document with the specified _docid didn't exist and has been created
          // console.log("Created new document.");
        }
      })
      .catch((error) => {
        // console.error("Error:", error);
      })
      .finally(() => {
        // Close the MongoDB connection when done
        // console.log(`Entering the mongoose document finally codeBlock`);
        // mongoose.connection.close();
      });

    // const decodedDocument = Y.decod
    //   const bo = data.document.toJSON();
    //   console.log(`[data.document] inside onStoreDocument\n`, typeof bo.content);
    //   const res = await fetch(`https://api-clm.coducer.xyz/documents/${docId}`, {
    //     method: "PUT",
    //     headers: {
    //       // "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify(initialValue123),
    //   });
    //   const updatedData = await res.json();
    //   console.log(`updatedData \n`, updatedData);
    return data.document;
  },

  async onLoadDocument(data) {
    console.log("##### onLoadDocument #####")
    // console.log("data.document \n", data.document); // Load the initial value in case the document is empty
    console.log("data.document.name \n", data.document.name);
    // console.log(
    //   `data.document.isEmpty("content") \n`,
    //   data.document.isEmpty("content")
    // );

    // console.log(`context \n`, data.context);
    const { docId } = data.context;

    // let getDoc;
    Document.findOne({ _docid: docId })
      .then((foundDocument) => {
        if (foundDocument) {
          // Document with the specified _docid has been found

          // console.log("################ document Found #################");
          // console.log(foundDocument);

          // console.log(`foundDocument.content\n`, foundDocument.content);

          const parsedContent = JSON.parse(foundDocument.content);
          // console.log(`parsedContent  \n`,parsedContent);
          // const binaryString = atob(foundDocument.content);
          // const uint8Array = Uint8Array.from(binaryString, (char) =>
          //   char.charCodeAt(0)
          // );

          // const ydoc = new Y.Doc();

          // const contentArray = ydoc.getArray("content");
          // console.log("content Array\n", contentArray);
          // contentArray.insert(0, uint8Array);
          // console.log(`uint8Array inside onLoadDocument \n`, uint8Array);
          // console.log(
          //   `content inside onLoadDocument \n`,
          //   foundDocument.content
          // );
          // const parsedContent = JSON.parse(content);

          // Update the Slate.js document with the parsed content
          const insertDelta = slateNodesToInsertDelta(parsedContent);

          const sharedRoot = data.document.get("content", Y.XmlText);
          // console.log(`sharedRoot \n`, sharedRoot);
          sharedRoot.applyDelta(insertDelta);

          // sharedRoot.delete(0, sharedRoot.length); // Clear the existing content
          // sharedRoot.insert(0, contentArray.toArray());

          // console.log("Found document:", foundDocument);
        } else {
          // Document with the specified _docid does not exist

          // console.log("Found document:", foundDocument);

          const insertDelta = slateNodesToInsertDelta(initialValue);

          const sharedRoot = data.document.get("content", Y.XmlText);
          // console.log(`sharedRoot \n`, sharedRoot);
          sharedRoot.applyDelta(insertDelta);

          const slateElement = yTextToSlateElement(sharedRoot);
          // console.log("slateElement \n", slateElement);
          // console.log("Document not found.");
        }
      })
      .catch((error) => {
        // console.error("Error:", error);
      })
      .finally(() => {
        // Close the MongoDB connection when done
        // mongoose.connection.close();
      });

    // docId = data.requestParameters.get("docId");
    // const token = data.requestParameters.get("token");
    // console.log(`data.document.toJSON() \n`, data.document.toJSON());
    // console.log(`data.requestParameters \n`, docId);
    // console.log(`data.token \n`, token);
    // const res = await fetch(`https://api-clm.coducer.xyz/documents/${docId}`, {
    // headers: { Authorization: `Bearer ${token}` },
    // });

    // const data123 = await res.json();
    // console.log(`data123 \n`, data123);
    // // toJSON()
    // console.log(`response to docId: ${docId} \n`, data123);
    // console.log(`data123.body.length: ${docId} \n`, data123.body.length);
    // if (data.document.isEmpty("content")) {
    //   // if (data123.body.length == 0)
    //   const insertDelta = slateNodesToInsertDelta(initialValue);
    //   // console.log(`insertDelta \n`, insertDelta);
    //   const sharedRoot = data.document.get("content", Y.XmlText);
    //   // console.log(`sharedRoot \n`, sharedRoot);
    //   sharedRoot.applyDelta(insertDelta);
    // } else {
    //   const insertDelta = slateNodesToInsertDelta(data123.body);
    //   // console.log(`insertDelta else\n`, insertDelta);
    //   const sharedRoot = data.document.get("content", Y.XmlText);
    //   // console.log(`sharedRoot else\n`, sharedRoot);
    //   sharedRoot.applyDelta(insertDelta);
    // }

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

  // server.configure({name: docId})
  server.handleConnection(websocket, request, context);
  
});

// Start the server
app.listen(1234, () => console.log("Listening on http://127.0.0.1:1234"));
