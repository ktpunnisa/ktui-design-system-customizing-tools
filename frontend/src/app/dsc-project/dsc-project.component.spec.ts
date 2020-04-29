import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DscProjectComponent } from './dsc-project.component';

describe('DscProjectComponent', () => {
  let component: DscProjectComponent;
  let fixture: ComponentFixture<DscProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DscProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DscProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
