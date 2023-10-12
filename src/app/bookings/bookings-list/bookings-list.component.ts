import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from 'src/app/models/meal.model';
import { Room } from 'src/app/models/room.model';
import { MealService } from 'src/app/services/meal.service';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings-list.component.html',
  styleUrls: ['./bookings-list.component.scss']
})

export class BookingsListComponent implements OnInit {
  meals$: Observable<Meal[]> = new Observable();
  rooms$: Observable<Room[]> = new Observable();
  
  constructor(private mealsService: MealService,
              private roomsService: RoomService) { }
  
  ngOnInit(): void {
    this.fetchMeals();
    this.fetchRooms();
  }
  
  deleteMeal(id: string): void {
    if (confirm("Are you sure you want to delete this meal?")) {
      this.mealsService.deleteMeal(id).subscribe({
        next: () => this.fetchMeals()
      });
    } else {}
  }

  deleteRoom(id: string): void {
    if (confirm("Are you sure you want to delete this room?")) {
      this.roomsService.deleteRoom(id).subscribe({
        next: () => this.fetchRooms()
      });
    } else {}
  }
  
  private fetchMeals(): void {
    this.meals$ = this.mealsService.getMeals();
  }
  private fetchRooms(): void {
    this.rooms$ = this.roomsService.getRooms();
  }
}
