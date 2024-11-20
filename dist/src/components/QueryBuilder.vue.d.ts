import { default as Child } from '../models/Child.ts';
import { Operator } from '../types.ts';
declare const _default: import('vue').DefineComponent<{
    filterFields: {
        type: ArrayConstructor;
        required: true;
    };
    value: {
        type: ObjectConstructor;
        required: true;
    };
    color: {
        type: StringConstructor;
        default: null;
    };
    operators: {
        type: {
            (arrayLength: number): Operator[];
            (...items: Operator[]): Operator[];
            new (arrayLength: number): Operator[];
            new (...items: Operator[]): Operator[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
            from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            of<T>(...items: T[]): T[];
            fromAsync<T>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T | PromiseLike<T>> | ArrayLike<T | PromiseLike<T>>): Promise<T[]>;
            fromAsync<T, U>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T> | ArrayLike<T>, mapFn: (value: Awaited<T>) => U, thisArg?: any): Promise<Awaited<U>[]>;
            readonly [Symbol.species]: ArrayConstructor;
        };
        required: false;
        default(): Operator[];
    };
    maxNestedLevel: {
        type: NumberConstructor;
        default: number;
    };
}, {}, {
    outerGroup: Child<any>;
}, {}, {
    removeGroup(index: number): void;
    initializeValue(): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, Readonly<import('vue').ExtractPropTypes<{
    filterFields: {
        type: ArrayConstructor;
        required: true;
    };
    value: {
        type: ObjectConstructor;
        required: true;
    };
    color: {
        type: StringConstructor;
        default: null;
    };
    operators: {
        type: {
            (arrayLength: number): Operator[];
            (...items: Operator[]): Operator[];
            new (arrayLength: number): Operator[];
            new (...items: Operator[]): Operator[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
            from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            of<T>(...items: T[]): T[];
            fromAsync<T>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T | PromiseLike<T>> | ArrayLike<T | PromiseLike<T>>): Promise<T[]>;
            fromAsync<T, U>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T> | ArrayLike<T>, mapFn: (value: Awaited<T>) => U, thisArg?: any): Promise<Awaited<U>[]>;
            readonly [Symbol.species]: ArrayConstructor;
        };
        required: false;
        default(): Operator[];
    };
    maxNestedLevel: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    operators: Operator[];
    color: string;
    maxNestedLevel: number;
}>;
export default _default;
