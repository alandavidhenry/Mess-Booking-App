import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealFormComponent } from './meal-form.component';

describe('MealFormComponent', () => {
  let component: MealFormComponent;
  let fixture: ComponentFixture<MealFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealFormComponent]
    });
    fixture = TestBed.createComponent(MealFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
