import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PismaComponent } from './pisma.component';

describe('PismaComponent', () => {
  let component: PismaComponent;
  let fixture: ComponentFixture<PismaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PismaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PismaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
