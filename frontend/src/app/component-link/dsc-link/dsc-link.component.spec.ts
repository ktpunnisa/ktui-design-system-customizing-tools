import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DscLinkComponent } from './dsc-link.component';

describe('DscLinkComponent', () => {
  let component: DscLinkComponent;
  let fixture: ComponentFixture<DscLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DscLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DscLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
