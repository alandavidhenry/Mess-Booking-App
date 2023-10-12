import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from 'src/app/models/meal.model';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-book-meal',
  templateUrl: './book-meal.component.html',
  styleUrls: ['./book-meal.component.scss']
})

export class BookMealComponent {
  constructor(
    private router: Router,
    private mealService: MealService
  ) { }
  
  addMeal(formData: Meal) {
    this.mealService.createMeal(formData)
      .subscribe({
        next: () => {
          this.router.navigate(['/meals']);
        },
        error: (error) => {
          alert("Failed to create meal");
          console.error(error);
        }
      });
  }
}
