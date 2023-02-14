import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MazowszeComponent } from './mazowsze.component';

describe('MazowszeComponent', () => {
  let component: MazowszeComponent;
  let fixture: ComponentFixture<MazowszeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MazowszeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MazowszeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
