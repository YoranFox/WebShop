import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpListComponent } from './lp-list.component';

describe('LpListComponent', () => {
  let component: LpListComponent;
  let fixture: ComponentFixture<LpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
