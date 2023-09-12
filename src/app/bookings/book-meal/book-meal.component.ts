import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookMeal } from 'src/app/models/book-meal.model';
import { FsDataService } from 'src/app/services/fs-data.service';

@Component({
  selector: 'app-book-meal',
  templateUrl: './book-meal.component.html',
  styleUrls: ['./book-meal.component.scss']
})
export class BookMealComponent {

  bookMeal: BookMeal = new BookMeal();

  constructor(private router: Router,
              private fsDataService: FsDataService) {}
  
  saveBooking(): void {
    
  }
}
