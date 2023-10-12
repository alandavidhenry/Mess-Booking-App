import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input()
  initialState: BehaviorSubject<User> = new BehaviorSubject({});
  
  @Output()
  formValuesChanged = new EventEmitter<User>();
  
  @Output()
  formSubmitted = new EventEmitter<User>();
  
  userForm: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder) { }
  
  get serviceNumber() { return this.userForm.get('serviceNumber')!; }
  get rank() { return this.userForm.get('rank')!; }
  get firstName() { return this.userForm.get('firstName')!; }
  get lastName() { return this.userForm.get('lastName')!; }
  get unit() { return this.userForm.get('unit')!; }
  get contactNumber() { return this.userForm.get('contactNumber')!; }
  get email() { return this.userForm.get('email')!; }
  
  ngOnInit() {
    this.initialState.subscribe(user => {
      this.userForm = this.fb.group({
        // serviceNumber: [ user.serviceNumber, [Validators.required, Validators.minLength(8), Validators.maxLength(8), (Validators.pattern("[2-3]\d+") || Validators.pattern("W[1-9]\d+"))]],
        serviceNumber: [ user.serviceNumber, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
        rank: [ user.rank, [ Validators.required ] ],
        firstName: [ user.firstName, [Validators.required] ],
        lastName: [ user.lastName, [Validators.required] ],
        unit: [ user.unit, [Validators.required] ],
        contactNumber: [ user.contactNumber, [Validators.required] ],
        email: [ user.email, [Validators.required] ]
      });
    });
  
    this.userForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
  }
  
  submitForm() {
    this.formSubmitted.emit(this.userForm.value);
  }
 }