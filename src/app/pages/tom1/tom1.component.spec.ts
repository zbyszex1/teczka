import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tom1Component } from './tom1.component';

describe('Tom1Component', () => {
  let component: Tom1Component;
  let fixture: ComponentFixture<Tom1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tom1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
