import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdanskComponent } from './gdansk.component';

describe('GdanskComponent', () => {
  let component: GdanskComponent;
  let fixture: ComponentFixture<GdanskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdanskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GdanskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
