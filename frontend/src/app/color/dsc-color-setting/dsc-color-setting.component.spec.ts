import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DscColorSettingComponent } from './dsc-color-setting.component';

describe('DscColorSettingComponent', () => {
  let component: DscColorSettingComponent;
  let fixture: ComponentFixture<DscColorSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DscColorSettingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DscColorSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
