import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibGeneratorComponent } from './lib-generator.component';

describe('LibGeneratorComponent', () => {
  let component: LibGeneratorComponent;
  let fixture: ComponentFixture<LibGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
