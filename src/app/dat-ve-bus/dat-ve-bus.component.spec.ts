import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatVeBusComponent } from './dat-ve-bus.component';

describe('DatVeBusComponent', () => {
  let component: DatVeBusComponent;
  let fixture: ComponentFixture<DatVeBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatVeBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatVeBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
