import { Element, Node } from 'slate';
import * as Y from 'yjs';
import { DeltaInsert, InsertDelta } from '../model/types';
export declare function yTextToSlateElement(yText: Y.XmlText): Element;
export declare function deltaInsertToSlateNode(insert: DeltaInsert): Node;
export declare function slateNodesToInsertDelta(nodes: Node[]): InsertDelta;
export declare function slateElementToYText({ children, ...attributes }: Element): Y.XmlText;
//# sourceMappingURL=convert.d.ts.map