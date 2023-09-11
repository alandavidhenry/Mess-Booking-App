import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { BookMeal } from '../models/book-meal.model';

@Injectable({
  providedIn: 'root'
})
export class BookMealService {

  private dbPath = '/book-meal';

  mealsRef: AngularFireList<BookMeal>;

  constructor(private db: AngularFireDatabase) {
    this.mealsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<BookMeal> {
    return this.mealsRef;
  }

  create(meal: BookMeal): any {
    return this.mealsRef.push(meal);
  }

  update(key: string, value: any): Promise<void> {
    return this.mealsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.mealsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.mealsRef.remove();
  }
}
