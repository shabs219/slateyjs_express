import type { Editor, Element, Node } from 'slate';
import type Y from 'yjs';
export declare type DeltaAttributes = {
    retain: number;
    attributes: Record<string, unknown>;
};
export declare type DeltaRetain = {
    retain: number;
};
export declare type DeltaDelete = {
    delete: number;
};
export declare type DeltaInsert = {
    insert: string | Y.XmlText;
    attributes?: Record<string, unknown>;
};
export declare type InsertDelta = Array<DeltaInsert>;
export declare type Delta = Array<DeltaRetain | DeltaDelete | DeltaInsert | DeltaAttributes>;
export declare type TextRange = {
    start: number;
    end: number;
};
export declare type HistoryStackItem = {
    meta: Map<string, unknown>;
};
export declare type YTarget = {
    textRange: TextRange;
    yParent: Y.XmlText;
    slateParent: Element | Editor;
    yTarget?: Y.XmlText;
    slateTarget?: Node;
    targetDelta: InsertDelta;
};
export declare type RelativeRange = {
    anchor: Y.RelativePosition;
    focus: Y.RelativePosition;
};
//# sourceMappingURL=types.d.ts.map