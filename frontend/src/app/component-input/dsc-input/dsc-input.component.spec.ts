import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DscInputComponent } from './dsc-input.component';

describe('DscInputComponent', () => {
  let component: DscInputComponent;
  let fixture: ComponentFixture<DscInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DscInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DscInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
