import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseColorComponent } from './base-color.component';

describe('BaseColorComponent', () => {
  let component: BaseColorComponent;
  let fixture: ComponentFixture<BaseColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
