import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgQuickSearchComponent } from './ng-quick-search.component';

describe('NgQuickSearchComponent', () => {
    let component: NgQuickSearchComponent;
    let fixture: ComponentFixture<NgQuickSearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgQuickSearchComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NgQuickSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
