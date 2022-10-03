import { Injectable } from '@angular/core';
import { QuickSearchOption } from './quick-search.options.model';

/**
 *
 */
@Injectable()
export class QuickSearchService<T> {
    public quickSearchOptions: QuickSearchOption<T>[] = [];

    public constructor() {}

    /**
     *
     * @param items
     */
    public initialize(items: T[]): void {
        this.setItems(items);
    }

    /**
     *
     * @param items
     */
    public setItems(items: T[]) {
        this.quickSearchOptions = [];

        const itemLength = items.length;

        for (let i = 0; i < itemLength; i++) {
            const quickSearchOption = this.mapItemToQuickSearchOption(items[i]);
            this.quickSearchOptions.push(quickSearchOption);
        }
    }

    /**
     *
     */
    public getItems(): T[] {
        return this.quickSearchOptions.map((item) => item.value);
    }

    /**
     *
     */
    public getQuickSearchOptions(): QuickSearchOption<T>[] {
        return this.quickSearchOptions;
    }

    /**
     *
     */
    public clearSelected(): void {}

    /**
     *
     * @param item
     */
    private mapItemToQuickSearchOption(item: T): QuickSearchOption<T> {
        return new QuickSearchOption(item);
    }
}
