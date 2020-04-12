import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorListSettingComponent } from './color-list-setting.component';

describe('ColorListSettingComponent', () => {
  let component: ColorListSettingComponent;
  let fixture: ComponentFixture<ColorListSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorListSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorListSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
