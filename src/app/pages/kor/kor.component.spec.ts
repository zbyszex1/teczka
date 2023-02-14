import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorComponent } from './kor.component';

describe('KorComponent', () => {
  let component: KorComponent;
  let fixture: ComponentFixture<KorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
