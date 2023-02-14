import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tom2Component } from './tom2.component';

describe('Tom2Component', () => {
  let component: Tom2Component;
  let fixture: ComponentFixture<Tom2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tom2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
