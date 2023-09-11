import { TestBed } from '@angular/core/testing';

import { BookMealService } from './book-meal.service';

describe('BookMealService', () => {
  let service: BookMealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookMealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
