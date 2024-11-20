declare const _default: import('vue').DefineComponent<Readonly<{}>, {}, {
    filter: {
        logicalOperator: string;
        children: ({
            type: string;
            query: {
                logicalOperator: string;
                children: ({
                    type: string;
                    query: {
                        rule: string;
                        operator: string;
                        operand: string;
                        value: number[];
                        logicalOperator?: undefined;
                        children?: undefined;
                    };
                    originalIndex: number;
                } | {
                    type: string;
                    query: {
                        logicalOperator: string;
                        children: {
                            type: string;
                            query: {
                                rule: string;
                                operator: string;
                                operand: string;
                                value: string;
                            };
                            originalIndex: number;
                        }[];
                        rule?: undefined;
                        operator?: undefined;
                        operand?: undefined;
                        value?: undefined;
                    };
                    originalIndex: number;
                })[];
                rule?: undefined;
                operator?: undefined;
                operand?: undefined;
                value?: undefined;
            };
        } | {
            type: string;
            query: {
                rule: string;
                operator: string;
                operand: string;
                value: string[];
                logicalOperator?: undefined;
                children?: undefined;
            };
        })[];
    };
    emptyQuery: {};
    filterFields: string[];
    operators: {
        value: string;
        text: string;
        type: string;
    }[];
}, {}, {
    updateFilter(newFilter: any): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, Readonly<import('vue').ExtractPropTypes<Readonly<{}>>>, {}>;
export default _default;
