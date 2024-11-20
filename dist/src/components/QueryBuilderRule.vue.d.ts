import { default as QueryRule } from '../models/QueryRule.ts';
import { default as Child } from '../models/Child.ts';
import { Operator } from '../types.ts';
declare const _default: import('vue').DefineComponent<{
    rule: {
        type: {
            new (query: QueryRule, type?: import('../types.ts').QueryElementType, index?: number): Child<QueryRule>;
        };
        required: true;
    };
    id: {
        type: NumberConstructor;
        required: true;
    };
    fields: {
        type: ArrayConstructor;
        required: true;
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
}, {}, {
    operator: Operator;
}, {
    value: {
        get: () => any;
        set: (value: Array<string | number> | string | number) => void;
    };
    hideValue(): boolean;
    showTextField(): boolean;
    showCombobox(): boolean;
    showRegexpField(): boolean;
    showPlaceHolder(): boolean;
}, {
    removeRule(): void;
    validRegexp(value: string): boolean;
    validRegexpInput(value: string): true | "Invalid regexp format";
    getOperator(): Operator;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, Readonly<import('vue').ExtractPropTypes<{
    rule: {
        type: {
            new (query: QueryRule, type?: import('../types.ts').QueryElementType, index?: number): Child<QueryRule>;
        };
        required: true;
    };
    id: {
        type: NumberConstructor;
        required: true;
    };
    fields: {
        type: ArrayConstructor;
        required: true;
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
}>>, {}>;
export default _default;
