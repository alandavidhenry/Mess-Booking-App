import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  // Initialise variables for radio buttons to be selected by default

  roomData!: Observable<any>;
  db: string = 'rooms';

  roomBookingForm!: FormGroup;
  bookRoom: BookRoom = new BookRoom();

  // RegEx validation
  dateRegEx: RegExp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  timeRegEx: RegExp = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

  constructor(private router: Router,
              private fsDataService: FsDataService,
              private fs: Firestore,
              private fb: FormBuilder) {
    this.getData();
  }

  ngOnInit(): void {
    this.roomBookingForm = this.fb.group({
      reasonForStay: ['', [Validators.required, Validators.minLength(3)]],
      arrivalDate: ['', [Validators.required, Validators.pattern(this.dateRegEx)]],
      arrivalTime: ['', [Validators.required, Validators.pattern(this.timeRegEx)]],
      departureDate: ['', [Validators.required, Validators.pattern(this.dateRegEx)]],
      departureTime: ['', [Validators.required, Validators.pattern(this.timeRegEx)]],
      beddingRequired: 'Yes',
      bringingGuests: 'No',
      firstGuestTitle: '',
      firstGuestName: '',
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

  setGuests(guests: string): void {
    const firstGuestTitleControl = this.roomBookingForm.get('firstGuestTitle');
    const firstGuestNameControl = this.roomBookingForm.get('firstGuestName');
      if (guests === 'Yes') {
        firstGuestTitleControl?.setValidators(Validators.required);
        firstGuestNameControl?.setValidators(Validators.required);
      } else {
        firstGuestTitleControl?.clearValidators();
        firstGuestNameControl?.clearValidators();
      }
      firstGuestTitleControl?.updateValueAndValidity();
      firstGuestNameControl?.updateValueAndValidity();
  }

  // Get data from Firestore Database
  getData() {
    const collectionInstance = collection(this.fs, 'rooms');
    collectionData(collectionInstance, { idField: 'id' })
    .subscribe(val => {
      console.log(val);
    })
    this.roomData = collectionData(collectionInstance, { idField: 'id' });
  }

  // Add booking
  addBooking(roomBookingForm: any) {
    this.fsDataService.addData(roomBookingForm, this.db);
    this.router.navigate(['/bookings', 'my-bookings']);
  }

  // Update booking
  updateBooking(roomBookingForm: any) {
    this.fsDataService.updateData(roomBookingForm, this.db);
  }

  // Delete booking
  deleteBooking(roomBookingForm: any) {
    this.fsDataService.deleteData(roomBookingForm, this.db);
  }
  
}
