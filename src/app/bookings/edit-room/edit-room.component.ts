import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Room } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.scss']
})
export class EditRoomComponent implements OnInit {
  room: BehaviorSubject<Room> = new BehaviorSubject({});
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private roomService: RoomService,
  ) { }
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      alert('No id provided');
    }
  
    this.roomService.getRoom(id !).subscribe((room) => {
      this.room.next(room);
    });
  }
  
  editRoom(room: Room) {
    this.roomService.updateRoom(this.room.value._id || '', room)
      .subscribe({
        next: () => {
          this.router.navigate(['/rooms']);
        },
        error: (error) => {
          alert('Failed to update room');
          console.error(error);
        }
      })
  }
}
