import { default as Query } from '../models/Query.ts';
import { default as Child } from '../models/Child.ts';
import { default as QueryRule } from '../models/QueryRule.ts';
import { Children, Operator } from '../types';
declare const _default: import('vue').DefineComponent<{
    group: {
        type: {
            new (query: Query, type?: import('../types').QueryElementType, index?: number): Child<Query>;
        };
        required: true;
    };
    id: {
        type: NumberConstructor;
        default: number;
    };
    fields: {
        type: ArrayConstructor;
        required: true;
    };
    removable: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
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
        required: true;
    };
    maxNestedLevel: {
        type: NumberConstructor;
        required: true;
    };
}, {}, {}, {
    sortedRules(): Children<QueryRule>;
    sortedGroups(): Children<Query>;
    disableGroupButton(): boolean;
}, {
    addGroup(): void;
    addRule(): void;
    removeGroup(): void;
    removeNestedGroup(index: number): void;
    removeNestedRule(index: number): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, Readonly<import('vue').ExtractPropTypes<{
    group: {
        type: {
            new (query: Query, type?: import('../types').QueryElementType, index?: number): Child<Query>;
        };
        required: true;
    };
    id: {
        type: NumberConstructor;
        default: number;
    };
    fields: {
        type: ArrayConstructor;
        required: true;
    };
    removable: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
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
        required: true;
    };
    maxNestedLevel: {
        type: NumberConstructor;
        required: true;
    };
}>>, {
    id: number;
    removable: boolean;
}>;
export default _default;
