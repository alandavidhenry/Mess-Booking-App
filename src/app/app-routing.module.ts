import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BookRoomComponent } from './bookings/book-room/book-room.component';
import { BookMealComponent } from './bookings/book-meal/book-meal.component';
import { MyBookingsComponent } from './bookings/my-bookings/my-bookings.component';

import { UsersListComponent } from './users/users-list/users-list.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bookings/book-room', component: BookRoomComponent },
  { path: 'bookings/book-meal', component: BookMealComponent },
  { path: 'bookings/my-bookings', component: MyBookingsComponent },


  { path: 'users', component: UsersListComponent },
  { path: 'users/new', component: AddUserComponent },
  { path: 'users/edit/:id', component: EditUserComponent },

  
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
