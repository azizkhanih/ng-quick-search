/**
 *
 */
export class QuickSearchOption<T> {
    label?: string;
    value: T;
    index?: number;
    htmlId?: string;
    selected?: boolean;
    disabled?: boolean;
    marked?: boolean;
    parent?: QuickSearchOption<T>;
    children?: QuickSearchOption<T>[];
    
    constructor(value: T) {
        this.value = value;
    }
}
