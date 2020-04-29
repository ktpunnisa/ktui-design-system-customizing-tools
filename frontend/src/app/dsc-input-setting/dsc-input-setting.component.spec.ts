import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DscInputSettingComponent } from './dsc-input-setting.component';

describe('DscInputSettingComponent', () => {
  let component: DscInputSettingComponent;
  let fixture: ComponentFixture<DscInputSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DscInputSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DscInputSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
