import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss']
})
export class RoomFormComponent implements OnInit {
  @Input()
  initialState: BehaviorSubject<Room> = new BehaviorSubject({});
  
  @Output()
  formValuesChanged = new EventEmitter<Room>();
  
  @Output()
  formSubmitted = new EventEmitter<Room>();
  
  roomForm: FormGroup = new FormGroup({});

  selectedRoomType: string[] = [];

  constructor(private fb: FormBuilder) { }
  
  // Getters
  get reasonForStay() { return this.roomForm.get('reasonForStay')!; }
  get arrivalDate() { return this.roomForm.get('arrivalDate')!; }
  get arrivalTime() { return this.roomForm.get('arrivalTime')!; }
  get departureDate() { return this.roomForm.get('departureDate')!; }
  get departureTime() { return this.roomForm.get('departureTime')!; }
  get bringingGuests() { return this.roomForm.get('bringingGuests')!; }
  get guests(): FormArray { return <FormArray>this.roomForm.get('guests'); }
  get roomType() { return this.roomForm.get('broomType')!; }
  get POCDetails() { return this.roomForm.get('POCDetails')!; }
  get POCServiceNumber() { return this.roomForm.get('POCServiceNumber')!; }
  get POCRank() { return this.roomForm.get('POCRank')!; }
  get beddingRequired() { return this.roomForm.get('beddingRequired')!; }
  get POCFirstName() { return this.roomForm.get('POCFirstName')!; }
  get POCLastName() { return this.roomForm.get('POCLastName')!; }
  get POCUnit() { return this.roomForm.get('POCUnit')!; }
  get POCContactNumber() { return this.roomForm.get('POCContactNumber')!; }
  get POCEmail() { return this.roomForm.get('POCEmail')!; }
  get checkRules() { return this.roomForm.get('checkRules')!; }
  
  ngOnInit() {
    this.initialState.subscribe(room => {
      this.roomForm = this.fb.group({
        reasonForStay: [ room.reasonForStay, [Validators.required, Validators.minLength(3)]],
        arrivalDate: [ room.arrivalDate, [Validators.required]],
        arrivalTime: [ room.arrivalTime, [Validators.required] ],
        departureDate: [ room.departureDate, [Validators.required] ],
        departureTime: [ room.departureTime, [Validators.required] ],
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
    });
  
    this.roomForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
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

  submitForm() {
    this.formSubmitted.emit(this.roomForm.value);
  }
}
