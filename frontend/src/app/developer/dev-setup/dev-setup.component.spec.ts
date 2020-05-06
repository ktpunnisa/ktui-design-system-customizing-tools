import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevSetupComponent } from './dev-setup.component';

describe('DevSetupComponent', () => {
  let component: DevSetupComponent;
  let fixture: ComponentFixture<DevSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
