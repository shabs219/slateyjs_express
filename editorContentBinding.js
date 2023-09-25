import { YjsEditor } from 'slate-yjs';
import { Editor } from 'slate';

export const editorContentBinding = (yDoc) => {
  return new YjsEditor(yDoc.clientID, {
    events: {
      fromYjsEvent(event) {
        switch (event.type) {
          case 'text-insert':
            return {
              type: 'insert_text',
              path: event.path,
              offset: event.offset,
              text: event.content,
            };
          case 'text-delete':
            return {
              type: 'remove_text',
              path: event.path,
              offset: event.offset,
              text: event.length,
            };
          // Handle other Yjs events as needed
        }
      },
      toYjsEvent(op) {
        switch (op.type) {
          case 'insert_text':
            return {
              type: 'text-insert',
              content: op.text,
              path: op.path,
              offset: op.offset,
            };
          case 'remove_text':
            return {
              type: 'text-delete',
              length: op.text.length,
              path: op.path,
              offset: op.offset,
            };
          // Handle other Slate operations as needed
        }
      },
    },
  });
};
