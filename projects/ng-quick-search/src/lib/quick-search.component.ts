import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    forwardRef,
    HostListener,
    Input,
    OnDestroy,
    OnInit,
    Renderer2,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { ConsoleService } from './console.service';
import { QuickSearchOption } from './quick-search.options.model';
import { QuickSearchService } from './quick-search.service';

/**
 *
 */
@Component({
    selector: 'ng-quick-search',
    templateUrl: './quick-search.component.html',
    styleUrls: ['./quick-search.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => QuickSearchComponent),
            multi: true,
        },
        QuickSearchService,
        ConsoleService,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickSearchComponent<T> implements OnInit, OnDestroy, ControlValueAccessor {
    @Input() public bindLabel: string = '';
    @Input() public bindValue: string = 'label';
    @Input() public noItemIsAvailableText: string = 'No item is available';
    @Input() public optionTemplate: TemplateRef<any> | null = null;
    @Input() public multiple: boolean = false;
    @Input() public notResultFoundText: string = 'No result found';
    @Input() public closeOnSelect: boolean = true;
    @Input() public typeAhead: Subject<string> = new Subject();
    @Input() public minTermLength: number = 3;
    @Input() public trackByFn: Function | null = null;
    /**
     *
     */
    @Input()
    public get items() {
        return this.quickSearchService.getItems();
    }
    /**
     *
     */
    public set items(values: T[]) {
        this.quickSearchService.initialize(values);
    }

    /**
     *
     */
    @HostListener('click', ['$event'])
    public onContainerClick(): void {
        this.openQuickSearch();
    }

    @ViewChild('quickSearchMenu')
    private quickSearchMenu!: ElementRef;

    public quickSearchIsOpen: boolean = false;

    private clickOutsideListenerFn: () => void = Function;

    public constructor(
        private cdRef: ChangeDetectorRef,
        private quickSearchService: QuickSearchService<T>,
        private renderer: Renderer2,
        private eRef: ElementRef
    ) {}

    public ngOnInit(): void {}

    public ngOnDestroy(): void {}

    /**
     *
     * TODO
     *
     * @param value
     */
    public writeValue(value: T): void {
        this.quickSearchService.clearSelected();
        this.handleWriteValue(value);
        this.cdRef.markForCheck();
    }

    /**
     *
     * TODO
     *
     * @param fn
     */
    public registerOnChange(fn: T): void {
        throw new Error('Method not implemented.');
    }

    /**
     *
     * TODO
     *
     * @param fn
     */
    public registerOnTouched(fn: T): void {
        throw new Error('Method not implemented.');
    }

    /**
     *
     * TODO
     *
     */
    public get quickSearchOptions(): QuickSearchOption<T>[] {
        return this.quickSearchService.getQuickSearchOptions();
    }

    /**
     *
     * TODO
     *
     * @param index
     * @param item
     * @returns
     */
    public trackByOption = (index: number, item: QuickSearchOption<T>) => {
        if (this.trackByFn) {
            return this.trackByFn(item.value);
        }

        return item;
    };

    /**
     *
     */
    public openQuickSearch(): void {
        this.quickSearchIsOpen = true;
        this.handleOutsideClick();
    }

    /**
     *
     */
    private closeQuickSearch(): void {
        if (this.clickOutsideListenerFn) {
            this.clickOutsideListenerFn();
        }

        this.quickSearchIsOpen = false;
        this.cdRef.detectChanges();
    }

    /**
     *
     */
    private handleOutsideClick(): void {
        this.clickOutsideListenerFn = this.renderer.listen('window', 'click', (e: Event) => {
            const node = this.eRef.nativeElement.childNodes[0];

            if (e.target !== this.quickSearchMenu?.nativeElement && e.target !== node) {
                this.closeQuickSearch();
            }
        });
    }

    /**
     *
     * TODO
     *
     * @param ngModel
     */
    private handleWriteValue(ngModel: T | T[]) {
        if (!this.isValidWriteValue(ngModel)) {
            return;
        }

        // const select = (val: T) => {
        //     let item = this.itemsList.findItem(val);

        //     if (item) {
        //         this.itemsList.select(item);
        //     } else {
        //         const isValObject = isObject(val);
        //         const isPrimitive = !isValObject && !this.bindValue;

        //         if (isValObject || isPrimitive) {
        //             this.itemsList.select(this.itemsList.mapItem(val, null));
        //         } else if (this.bindValue) {
        //             item = {
        //                 [this.bindLabel]: null,
        //                 [this.bindValue]: val,
        //             };
        //             this.itemsList.select(this.itemsList.mapItem(item, null));
        //         }
        //     }
        // };

        // if (this.multiple) {
        //     (<T[]>ngModel).forEach((item) => select(item));
        // } else {
        //     select(ngModel);
        // }
    }

    /**
     *
     * TODO
     *
     * @param value
     */
    private isValidWriteValue(value: T | T[]): boolean {
        // if (!isDefined(value) || (this.multiple && value === '') || (Array.isArray(value) && value.length === 0)) {
        //     return false;
        // }
        // const validateBinding = (item: T): boolean => {
        //     if (!isDefined(this.compareWith) && isObject(item) && this.bindValue) {
        //         this.console.warn(
        //             `Setting object(${JSON.stringify(
        //                 item
        //             )}) as your model with bindValue is not allowed unless [compareWith] is used.`
        //         );
        //         return false;
        //     }
        //     return true;
        // };
        // if (this.multiple) {
        //     if (!Array.isArray(value)) {
        //         this.consoleService.warn('Multiple select ngModel should be array.');
        //         return false;
        //     }
        //     return value.every((item) => validateBinding(item));
        // } else {
        //     return validateBinding(value);
        // }

        return false;
    }
}
