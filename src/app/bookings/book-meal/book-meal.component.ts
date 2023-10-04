import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

import { BookMeal } from 'src/app/models/book-meal.model';
import { FsDataService } from 'src/app/services/fs-data.service';

@Component({
  selector: 'app-book-meal',
  templateUrl: './book-meal.component.html',
  styleUrls: ['./book-meal.component.scss']
})
export class BookMealComponent implements OnInit {

  data!: Observable<any>;
  db: string = 'meals';

  mealBookingForm!: FormGroup;
  bookMeal: BookMeal = new BookMeal();

  // RegEx validation
  dateRegEx: RegExp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

  constructor(private router: Router,
              private fsDataService: FsDataService,
              private fs: Firestore,
              private fb: FormBuilder) {
              this.getData();
  }

  ngOnInit(): void {
    this.mealBookingForm = this.fb.group({
      mealDate: ['', [Validators.required, Validators.pattern(this.dateRegEx)]],
      mealType: '',
      dietaryRequirements: ''
    });
  }
  
  // Get data from Firestore Database
  getData() {
    const collectionInstance = collection(this.fs, 'meals');
    collectionData(collectionInstance, { idField: 'id' })
    .subscribe(val => {
      console.log(val);
    })
    this.data = collectionData(collectionInstance, { idField: 'id' });
  }

  // Add booking using service
  addBooking(mealBookingForm: any) {
    this.fsDataService.addData(mealBookingForm, this.db);
    this.router.navigate(['/bookings', 'my-bookings']);
  }

  // Update booking using service
  updateBooking(mealBookingForm: any) {
    this.fsDataService.updateData(mealBookingForm, this.db);
  }

  // Delete booking using service
  deleteBooking(mealBookingForm: any) {
    this.fsDataService.deleteData(mealBookingForm, this.db);
  }
}
