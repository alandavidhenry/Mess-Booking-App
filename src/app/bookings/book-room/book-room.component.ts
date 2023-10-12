import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.scss']
})

export class BookRoomComponent {
  constructor(
    private router: Router,
    private roomService: RoomService
  ) { }
  
  addRoom(formData: Room) {
    this.roomService.createRoom(formData)
      .subscribe({
        next: () => {
          this.router.navigate(['/rooms']);
        },
        error: (error) => {
          alert("Failed to create room");
          console.error(error);
        }
      });
  }
}
