import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JailComponent } from './jail.component';

describe('JailComponent', () => {
  let component: JailComponent;
  let fixture: ComponentFixture<JailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
