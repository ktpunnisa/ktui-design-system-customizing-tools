import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevSidebarComponent } from './dev-sidebar.component';

describe('DevSidebarComponent', () => {
  let component: DevSidebarComponent;
  let fixture: ComponentFixture<DevSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
