declare type InspectableObject = Record<string | number | symbol, unknown>;
export declare function isPlainObject(o: unknown): o is InspectableObject;
export declare function deepEquals(node: InspectableObject, another: InspectableObject): boolean;
export declare function pick<TObj, TKeys extends keyof TObj>(obj: TObj, ...keys: TKeys[]): Pick<TObj, TKeys>;
export declare function omit<TObj, TKeys extends keyof TObj>(obj: TObj, ...keys: TKeys[]): Omit<TObj, TKeys>;
export declare function omitNullEntries<TObj>(obj: TObj): {
    [K in keyof TObj]: TObj[K] extends null ? never : K;
};
export {};
//# sourceMappingURL=object.d.ts.map