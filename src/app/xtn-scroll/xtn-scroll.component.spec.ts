import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XtnScrollComponent } from './xtn-scroll.component';

describe('XtnScrollComponent', () => {
  let component: XtnScrollComponent;
  let fixture: ComponentFixture<XtnScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XtnScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XtnScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
