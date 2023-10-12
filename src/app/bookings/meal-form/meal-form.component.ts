import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Meal } from 'src/app/models/meal.model';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.scss']
})
export class MealFormComponent implements OnInit {
  @Input()
  initialState: BehaviorSubject<Meal> = new BehaviorSubject({});
  
  @Output()
  formValuesChanged = new EventEmitter<Meal>();
  
  @Output()
  formSubmitted = new EventEmitter<Meal>();
  
  mealForm: FormGroup = new FormGroup({});

  selectedMealType: string[] = [];
  
  constructor(private fb: FormBuilder) { }
  
  get mealDate() { return this.mealForm.get('mealDate')!; }
  get mealType() { return this.mealForm.get('mealType')!; }
  get dietaryRequirements() { return this.mealForm.get('dietaryRequirements')!; }
  
  ngOnInit() {
    this.initialState.subscribe(meal => {
      this.mealForm = this.fb.group({
        mealDate: [ meal.mealDate, [Validators.required]],
        mealType: [ meal.mealType ],
        dietaryRequirements: [ meal.dietaryRequirements ]
      });
    });
  
    this.mealForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
  }

  // Handle checkbox change and update selected dietary requirements
  onCheckboxChange(event: Event, value: string) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedMealType.push(value);
    } else {
      const index = this.selectedMealType.indexOf(value);
      if (index !== -1) {
        this.selectedMealType.splice(index, 1);
      }
    }
  }
  
  submitForm() {
    // Assign the selected checkbox values to the mealType property in the form data
    const formData = this.mealForm.value;
    formData.mealType = this.selectedMealType;

    // Pass the formData to the meal service
    this.formSubmitted.emit(formData);
  }
 }
