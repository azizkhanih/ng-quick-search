import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuickSearchModule } from 'projects/ng-quick-search/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const ANGULAR_MODULES = [BrowserModule, AppRoutingModule];
const QUICK_SEARCH_MODULES = [QuickSearchModule];
const COMPONENTS = [AppComponent];

/**
 *
 */
@NgModule({
    declarations: [...COMPONENTS],
    imports: [...ANGULAR_MODULES, ...QUICK_SEARCH_MODULES],
    providers: [],
    bootstrap: [...COMPONENTS],
})
export class AppModule {}
