import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DscButtonComponent } from './dsc-button.component';

describe('DscButtonComponent', () => {
  let component: DscButtonComponent;
  let fixture: ComponentFixture<DscButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DscButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DscButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
