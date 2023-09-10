import { Element, Node, Path } from 'slate';
import * as Y from 'yjs';
import { YTarget } from '../model/types';
export declare function getSlateNodeYLength(node: Node | undefined): number;
export declare function slatePathOffsetToYOffset(element: Element, pathOffset: number): number;
export declare function getYTarget(yRoot: Y.XmlText, slateRoot: Node, path: Path): YTarget;
export declare function yOffsetToSlateOffsets(parent: Element, yOffset: number, opts?: {
    assoc?: number;
    insert?: boolean;
}): [number, number];
export declare function getSlatePath(sharedRoot: Y.XmlText, slateRoot: Node, yText: Y.XmlText): Path;
//# sourceMappingURL=location.d.ts.map