import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Meal } from 'src/app/models/meal.model'
 
@Injectable({
 providedIn: 'root'
})
export class MealService {
 private url = 'http://localhost:5200';
 private meals$: Subject<Meal[]> = new Subject();
 
 constructor(private httpClient: HttpClient) { }
 
 private refreshMeals() {
   this.httpClient.get<Meal[]>(`${this.url}/meals`)
     .subscribe(meals => {
       this.meals$.next(meals);
     });
 }
 
 getMeals(): Subject<Meal[]> {
   this.refreshMeals();
   return this.meals$;
 }
 
 getMeal(id: string): Observable<Meal> {
   return this.httpClient.get<Meal>(`${this.url}/meals/${id}`);
 }
 
 createMeal(meal: Meal): Observable<string> {
   return this.httpClient.post(`${this.url}/meals`, meal, { responseType: 'text' });
 }
 
 updateMeal(id: string, meal: Meal): Observable<string> {
   return this.httpClient.put(`${this.url}/meals/${id}`, meal, { responseType: 'text' });
 }
 
 deleteMeal(id: string): Observable<string> {
   return this.httpClient.delete(`${this.url}/meals/${id}`, { responseType: 'text' });
 }
}