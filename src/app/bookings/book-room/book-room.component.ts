import { Component } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { BookRoom } from 'src/app/models/book-room.model';
import { FsDataService } from 'src/app/services/fs-data.service';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.scss']
})
export class BookRoomComponent {

  bookRoom: BookRoom = new BookRoom();

  roomData!: Observable<any>;
  db: string = 'rooms';

  constructor(private router: Router,
              private fsDataService: FsDataService,
              private fs: Firestore) {

    this.getData();
  }

  getData() {
    const collectionInstance = collection(this.fs, 'rooms');
    collectionData(collectionInstance, { idField: 'id' })
    .subscribe(val => {
      console.log(val);
    })
    this.roomData = collectionData(collectionInstance, { idField: 'id' });
  }

  addBooking(f: any) {
    this.fsDataService.addData(f, this.db);
    this.router.navigate(['/bookings', 'my-bookings']);
  }

  updateBooking(f: any) {
    this.fsDataService.updateData(f, this.db);
  }

  deleteBooking(f: any) {
    this.fsDataService.deleteData(f, this.db);
  }
  
}
