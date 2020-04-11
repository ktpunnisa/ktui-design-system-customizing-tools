import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaddingSettingComponent } from './padding-setting.component';

describe('PaddingSettingComponent', () => {
  let component: PaddingSettingComponent;
  let fixture: ComponentFixture<PaddingSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaddingSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaddingSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
