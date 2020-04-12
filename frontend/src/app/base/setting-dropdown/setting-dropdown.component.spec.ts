import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingDropdownComponent } from './setting-dropdown.component';

describe('SettingDropdownComponent', () => {
  let component: SettingDropdownComponent;
  let fixture: ComponentFixture<SettingDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
