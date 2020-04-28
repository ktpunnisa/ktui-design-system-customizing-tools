import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontWeightSettingComponent } from './font-weight-setting.component';

describe('FontWeightSettingComponent', () => {
  let component: FontWeightSettingComponent;
  let fixture: ComponentFixture<FontWeightSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontWeightSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontWeightSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
