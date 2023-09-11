import { Logger } from "@hocuspocus/extension-logger";
import { Server } from "@hocuspocus/server";
import { slateNodesToInsertDelta } from "@slate-yjs/core";
import * as Y from "yjs";

const initialValue = [
  {
    type: "page",
    children: [
      {
        type: "paragraph",
        children: [{ type: "text", text: "start123" }],
      },
      {
        type: "paragraph",
        children: [{ type: "text", text: "start123345" }],
      },
    ],
  },
];

// Setup the server
const server = Server.configure({
  port: 1234,
  host: "192.168.0.37",

  // Add logging
  extensions: [new Logger()],

  async onLoadDocument(data) {
    // Load the initial value in case the document is empty
    if (data.document.isEmpty("content")) {
      const insertDelta = slateNodesToInsertDelta(initialValue);
      const sharedRoot = data.document.get("content", Y.XmlText);
      sharedRoot.applyDelta(insertDelta);
    }

    return data.document;
  },
  async connected() {
    console.log("connections:", server.getConnectionsCount());
  },
  async onDisconnect(data) {
    // Output some information
    console.log(`disconnected;`, server.getConnectionsCount());
  },
});

// Start the server
server.enableMessageLogging();
server.listen();
