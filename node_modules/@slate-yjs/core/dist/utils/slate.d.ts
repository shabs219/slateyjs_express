import { BaseText, Descendant } from 'slate';
export declare function getProperties<TNode extends Descendant>(node: TNode): Omit<TNode, TNode extends BaseText ? 'text' : 'children'>;
//# sourceMappingURL=slate.d.ts.map