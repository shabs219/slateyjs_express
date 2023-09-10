import { BaseEditor, Descendant, Editor, Operation, Point } from 'slate';
import * as Y from 'yjs';
declare type LocalChange = {
    op: Operation;
    doc: Descendant[];
    origin: unknown;
};
export declare type YjsEditor = BaseEditor & {
    sharedRoot: Y.XmlText;
    localOrigin: unknown;
    positionStorageOrigin: unknown;
    applyRemoteEvents: (events: Y.YEvent<Y.XmlText>[], origin: unknown) => void;
    storeLocalChange: (op: Operation) => void;
    flushLocalChanges: () => void;
    isLocalOrigin: (origin: unknown) => boolean;
    connect: () => void;
    disconnect: () => void;
};
export declare const YjsEditor: {
    isYjsEditor(value: unknown): value is YjsEditor;
    localChanges(editor: YjsEditor): LocalChange[];
    applyRemoteEvents(editor: YjsEditor, events: Y.YEvent<Y.XmlText>[], origin: unknown): void;
    storeLocalChange(editor: YjsEditor, op: Operation): void;
    flushLocalChanges(editor: YjsEditor): void;
    connected(editor: YjsEditor): boolean;
    connect(editor: YjsEditor): void;
    disconnect(editor: YjsEditor): void;
    isLocal(editor: YjsEditor): boolean;
    origin(editor: YjsEditor): unknown;
    withOrigin(editor: YjsEditor, origin: unknown, fn: () => void): void;
    storePosition(editor: YjsEditor, key: string, point: Point): void;
    removeStoredPosition(editor: YjsEditor, key: string): void;
    position(editor: YjsEditor, key: string): Point | null | undefined;
    storedPositionsRelative(editor: YjsEditor): Record<string, Y.RelativePosition>;
};
export declare type WithYjsOptions = {
    autoConnect?: boolean;
    localOrigin?: unknown;
    positionStorageOrigin?: unknown;
};
export declare function withYjs<T extends Editor>(editor: T, sharedRoot: Y.XmlText, { localOrigin, positionStorageOrigin, autoConnect, }?: WithYjsOptions): T & YjsEditor;
export {};
//# sourceMappingURL=withYjs.d.ts.map