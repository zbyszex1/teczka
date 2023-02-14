import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerobarComponent } from './herobar.component';

describe('HerobarComponent', () => {
  let component: HerobarComponent;
  let fixture: ComponentFixture<HerobarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerobarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
