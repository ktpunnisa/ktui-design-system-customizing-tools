import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevInputComponent } from './dev-input.component';

describe('DevInputComponent', () => {
  let component: DevInputComponent;
  let fixture: ComponentFixture<DevInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
