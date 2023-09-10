import { Range } from 'slate';
import { Awareness } from 'y-protocols/awareness';
import { RelativeRange } from '../model/types';
import { YjsEditor } from './withYjs';
export declare type CursorStateChangeEvent = {
    added: number[];
    updated: number[];
    removed: number[];
};
export declare type RemoteCursorChangeEventListener = (event: CursorStateChangeEvent) => void;
export declare type CursorState<TCursorData extends Record<string, unknown> = Record<string, unknown>> = {
    relativeSelection: RelativeRange | null;
    data?: TCursorData;
    clientId: number;
};
export declare type CursorEditor<TCursorData extends Record<string, unknown> = Record<string, unknown>> = YjsEditor & {
    awareness: Awareness;
    cursorDataField: string;
    selectionStateField: string;
    sendCursorPosition: (range: Range | null) => void;
    sendCursorData: (data: TCursorData) => void;
};
export declare const CursorEditor: {
    isCursorEditor(value: unknown): value is CursorEditor<Record<string, unknown>>;
    sendCursorPosition<TCursorData extends Record<string, unknown>>(editor: CursorEditor<TCursorData>, range?: Range | null): void;
    sendCursorData<TCursorData_1 extends Record<string, unknown>>(editor: CursorEditor<TCursorData_1>, data: TCursorData_1): void;
    on<TCursorData_2 extends Record<string, unknown>>(editor: CursorEditor<TCursorData_2>, event: 'change', handler: RemoteCursorChangeEventListener): void;
    off<TCursorData_3 extends Record<string, unknown>>(editor: CursorEditor<TCursorData_3>, event: 'change', listener: RemoteCursorChangeEventListener): void;
    cursorState<TCursorData_4 extends Record<string, unknown>>(editor: CursorEditor<TCursorData_4>, clientId: number): CursorState<TCursorData_4> | null;
    cursorStates<TCursorData_5 extends Record<string, unknown>>(editor: CursorEditor<TCursorData_5>): Record<string, CursorState<TCursorData_5>>;
};
export declare type WithCursorsOptions<TCursorData extends Record<string, unknown> = Record<string, unknown>> = {
    cursorStateField?: string;
    cursorDataField?: string;
    data?: TCursorData;
    autoSend?: boolean;
};
export declare function withCursors<TCursorData extends Record<string, unknown>, TEditor extends YjsEditor>(editor: TEditor, awareness: Awareness, { cursorStateField: selectionStateField, cursorDataField, autoSend, data, }?: WithCursorsOptions<TCursorData>): TEditor & CursorEditor<TCursorData>;
//# sourceMappingURL=withCursors.d.ts.map