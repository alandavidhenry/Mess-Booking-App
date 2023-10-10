import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

import { BookRoom } from 'src/app/models/book-room.model';
import { FsDataService } from 'src/app/services/fs-data.service';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.scss']
})
export class BookRoomComponent implements OnInit {

  data!: Observable<any>;
  db: string = 'rooms';

  roomBookingForm!: FormGroup;
  bookRoom: BookRoom = new BookRoom();

  // RegEx validation
  dateRegEx: RegExp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  timeRegEx: RegExp = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

  // Getter
  get guests(): FormArray {
    return <FormArray>this.roomBookingForm.get('guests');
  }

  constructor(private router: Router,
              private fsDataService: FsDataService,
              private fs: Firestore,
              private fb: FormBuilder) {
    // this.getUsers();
    this.getData(this.data);
  }

  ngOnInit(): void {
    this.roomBookingForm = this.fb.group({
      serviceNumber: {value:'', disabled: true},
      rank: {value:'', disabled: true},
      firstName: {value:'', disabled: true},
      lastName: {value:'', disabled: true},
      unit: {value:'', disabled: true},
      contactNumber: {value:'', disabled: true},
      email: {value:'', disabled: true},
      reasonForStay: ['', [Validators.required, Validators.minLength(3)]],
      arrivalDate: ['', [Validators.required, Validators.pattern(this.dateRegEx)]],
      arrivalTime: ['', [Validators.required, Validators.pattern(this.timeRegEx)]],
      departureDate: ['', [Validators.required, Validators.pattern(this.dateRegEx)]],
      departureTime: ['', [Validators.required, Validators.pattern(this.timeRegEx)]],
      beddingRequired: 'Yes',
      bringingGuests: 'No',
      guests: this.fb.array([ this.buildGuest() ]),
      roomType: 'Single Bunk',
      POCDetails: 'Same',
      POCServiceNumber: '',
      POCRank: '',
      POCFirstName: '',
      POCLastName: '',
      POCUnit: '',
      POCContactNumber: '',
      POCEmail: '',
      checkRules: false
    });

    this.roomBookingForm.get('bringingGuests')?.valueChanges.subscribe(
      value => this.setGuests(value)
    );

  }

  // Pushes a new guest form group
  addGuest(): void {
    this.guests.push(this.buildGuest());
  }

  // Creates a new guest form group
  buildGuest(): FormGroup {
    return this.fb.group({
      guestTitle: '',
      guestName: '',
    })
  }

  // Guests validation which works only when: bringingGuests = 'Yes'
  setGuests(guests: string): void {
    const guestTitleControl = this.roomBookingForm.get('guests.guestTitle');
    const guestNameControl = this.roomBookingForm.get('guests.guestName');
      if (guests === 'Yes') {
        guestTitleControl?.setValidators(Validators.required);
        guestNameControl?.setValidators(Validators.required);
      } else {
        guestTitleControl?.clearValidators();
        guestNameControl?.clearValidators();
      }
      guestTitleControl?.updateValueAndValidity();
      guestNameControl?.updateValueAndValidity();
  }

  // Get user data from Firestore Database
  // getUsers() {
  //   const collectionInstance = collection(this.fs, 'users');
  //   collectionData(collectionInstance, { idField: 'id' })
  //   .subscribe(val => {
  //     console.log(val);
  //   })
  //   this.data = collectionData(collectionInstance, { idField: 'id' });
  // }

  // Get rooms data from Firestore Database
  // getData() {
  //   const collectionInstance = collection(this.fs, 'rooms');
  //   collectionData(collectionInstance, { idField: 'id' })
  //   .subscribe(val => {
  //     console.log(val);
  //   })
  //   this.data = collectionData(collectionInstance, { idField: 'id' });
  // }

  // Get data
  getData(data: any) {
    this.fsDataService.getData(data, this.db);
  }

  // Add room booking using service
  addBooking(roomBookingForm: any) {
    this.fsDataService.addData(roomBookingForm, this.db);
    this.router.navigate(['/bookings', 'my-bookings']);
  }

  // Update room booking using service
  updateBooking(roomBookingForm: any) {
    this.fsDataService.updateData(roomBookingForm, this.db);
  }

  // Delete room booking using service
  deleteBooking(roomBookingForm: any) {
    this.fsDataService.deleteData(roomBookingForm, this.db);
  }
  
}
