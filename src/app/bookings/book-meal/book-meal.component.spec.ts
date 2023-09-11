import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMealComponent } from './book-meal.component';

describe('BookMealComponent', () => {
  let component: BookMealComponent;
  let fixture: ComponentFixture<BookMealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookMealComponent]
    });
    fixture = TestBed.createComponent(BookMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
