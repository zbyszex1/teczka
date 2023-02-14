import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkfComponent } from './ukf.component';

describe('UkfComponent', () => {
  let component: UkfComponent;
  let fixture: ComponentFixture<UkfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UkfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UkfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
