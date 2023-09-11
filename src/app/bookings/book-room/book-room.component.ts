import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookRoom } from 'src/app/models/book-room.model';
import { BookRoomService } from 'src/app/services/book-room.service';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.scss']
})
export class BookRoomComponent {

  bookRoom: BookRoom = new BookRoom();

  constructor(private router: Router,
              private bookRoomService: BookRoomService) {}
  
  saveBooking(): void {
    this.bookRoomService.create(this.bookRoom).then(() => {
      console.log('Created new room booking successfully!');
      this.router.navigate(['/bookings', 'my-bookings']);
    });
  }
}
