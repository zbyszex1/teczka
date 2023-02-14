import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwComponent } from './tw.component';

describe('TwComponent', () => {
  let component: TwComponent;
  let fixture: ComponentFixture<TwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
