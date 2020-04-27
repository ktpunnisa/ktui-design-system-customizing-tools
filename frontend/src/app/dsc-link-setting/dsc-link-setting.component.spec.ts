import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DscLinkSettingComponent } from './dsc-link-setting.component';

describe('DscLinkSettingComponent', () => {
  let component: DscLinkSettingComponent;
  let fixture: ComponentFixture<DscLinkSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DscLinkSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DscLinkSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
