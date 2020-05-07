import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevLinkComponent } from './dev-link.component';

describe('DevLinkComponent', () => {
  let component: DevLinkComponent;
  let fixture: ComponentFixture<DevLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
