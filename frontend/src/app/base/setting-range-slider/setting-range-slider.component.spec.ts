import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingRangeSliderComponent } from './setting-range-slider.component';

describe('SettingRangeSliderComponent', () => {
  let component: SettingRangeSliderComponent;
  let fixture: ComponentFixture<SettingRangeSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingRangeSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingRangeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
