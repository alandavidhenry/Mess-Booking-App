import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingsListComponent } from './bookings/bookings-list/bookings-list.component';
import { BookRoomComponent } from './bookings/book-room/book-room.component';
import { EditRoomComponent } from './bookings/edit-room/edit-room.component';
import { BookMealComponent } from './bookings/book-meal/book-meal.component';
import { EditMealComponent } from './bookings/edit-meal/edit-meal.component';

import { UsersListComponent } from './users/users-list/users-list.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ProfileComponent } from './users/profile/profile.component';
import { SignInComponent } from './users/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bookings', component: BookingsListComponent },
  { path: 'bookings/book-room', component: BookRoomComponent },
  { path: 'bookings/edit-room/:id', component: EditRoomComponent },
  { path: 'bookings/book-meal', component: BookMealComponent },
  { path: 'bookings/edit-meal/:id', component: EditMealComponent },

  { path: 'users', component: UsersListComponent },
  { path: 'users/register', component: AddUserComponent },
  { path: 'users/edit/:id', component: EditUserComponent },
  { path: 'users/profile', component: ProfileComponent },
  { path: 'users/sign-in', component: SignInComponent },

  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
