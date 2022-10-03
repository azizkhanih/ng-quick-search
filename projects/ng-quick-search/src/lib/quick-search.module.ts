import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuickSearchComponent } from './quick-search.component';

const ANGULAR_MODULES = [CommonModule];
const COMPONENTS = [QuickSearchComponent];

/**
 *
 */
@NgModule({
    declarations: [...COMPONENTS],
    imports: [...ANGULAR_MODULES],
    exports: [...COMPONENTS],
})
export class QuickSearchModule {}
