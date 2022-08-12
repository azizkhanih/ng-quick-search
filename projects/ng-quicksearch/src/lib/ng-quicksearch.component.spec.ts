import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgQuicksearchComponent } from './ng-quicksearch.component';

describe('NgQuicksearchComponent', () => {
  let component: NgQuicksearchComponent;
  let fixture: ComponentFixture<NgQuicksearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgQuicksearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgQuicksearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
