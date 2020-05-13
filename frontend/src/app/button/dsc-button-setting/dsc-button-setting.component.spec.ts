import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DscButtonSettingComponent } from './dsc-button-setting.component';

describe('DscButtonSettingComponent', () => {
  let component: DscButtonSettingComponent;
  let fixture: ComponentFixture<DscButtonSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DscButtonSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DscButtonSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
