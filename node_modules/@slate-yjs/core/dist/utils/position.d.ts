import { BasePoint, BaseRange, Node } from 'slate';
import * as Y from 'yjs';
import { InsertDelta, RelativeRange } from '../model/types';
export declare const STORED_POSITION_PREFIX = "__slateYjsStoredPosition_";
export declare function slatePointToRelativePosition(sharedRoot: Y.XmlText, slateRoot: Node, point: BasePoint): Y.RelativePosition;
export declare function absolutePositionToSlatePoint(sharedRoot: Y.XmlText, slateRoot: Node, { type, index, assoc }: Y.AbsolutePosition): BasePoint | null;
export declare function relativePositionToSlatePoint(sharedRoot: Y.XmlText, slateRoot: Node, pos: Y.RelativePosition): BasePoint | null;
export declare function getStoredPosition(sharedRoot: Y.XmlText, key: string): Y.RelativePosition | null;
export declare function getStoredPositions(sharedRoot: Y.XmlText): Record<string, Y.RelativePosition>;
export declare function removeStoredPosition(sharedRoot: Y.XmlText, key: string): void;
export declare function setStoredPosition(sharedRoot: Y.XmlText, key: string, position: Y.RelativePosition): void;
export declare function getStoredPositionsInDeltaAbsolute(sharedRoot: Y.XmlText, yText: Y.XmlText, delta: InsertDelta, deltaOffset?: number): {
    '': {
        [k: string]: Y.AbsolutePosition;
    };
};
export declare function restoreStoredPositionsWithDeltaAbsolute(sharedRoot: Y.XmlText, yText: Y.XmlText, absolutePositions: Record<string, Record<string, Y.AbsolutePosition>>, delta: InsertDelta, newDeltaOffset?: number, previousDeltaOffset?: number, path?: string): void;
export declare function slateRangeToRelativeRange(sharedRoot: Y.XmlText, slateRoot: Node, range: BaseRange): RelativeRange;
export declare function relativeRangeToSlateRange(sharedRoot: Y.XmlText, slateRoot: Node, range: RelativeRange): BaseRange | null;
//# sourceMappingURL=position.d.ts.map