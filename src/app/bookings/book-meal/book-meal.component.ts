import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookMeal } from 'src/app/models/book-meal.model';
import { BookMealService } from 'src/app/services/book-meal.service';

@Component({
  selector: 'app-book-meal',
  templateUrl: './book-meal.component.html',
  styleUrls: ['./book-meal.component.scss']
})
export class BookMealComponent {

  bookMeal: BookMeal = new BookMeal();

  constructor(private router: Router,
              private bookMealService: BookMealService) {}
  
  saveBooking(): void {
    this.bookMealService.create(this.bookMeal).then(() => {
      console.log('Created new meal booking successfully!');
      this.router.navigate(['/bookings', 'my-bookings']);
    });
  }
}
