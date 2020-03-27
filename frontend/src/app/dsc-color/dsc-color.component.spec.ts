import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DscColorComponent } from './dsc-color.component';

describe('DscColorComponent', () => {
  let component: DscColorComponent;
  let fixture: ComponentFixture<DscColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DscColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DscColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
