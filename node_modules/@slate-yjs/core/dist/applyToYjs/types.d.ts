import { Node, Operation } from 'slate';
import * as Y from 'yjs';
export declare type ApplyFunc<O extends Operation = Operation> = (sharedRoot: Y.XmlText, slateRoot: Node, op: O) => void;
export declare type OpMapper<O extends Operation = Operation> = {
    [K in O['type']]: O extends {
        type: K;
    } ? ApplyFunc<O> : never;
};
//# sourceMappingURL=types.d.ts.map