import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorThemeSettingComponent } from './color-theme-setting.component';

describe('ColorThemeSettingComponent', () => {
  let component: ColorThemeSettingComponent;
  let fixture: ComponentFixture<ColorThemeSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorThemeSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorThemeSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
