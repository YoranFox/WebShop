import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicDemoComponent } from './music-demo.component';

describe('MusicDemoComponent', () => {
  let component: MusicDemoComponent;
  let fixture: ComponentFixture<MusicDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
