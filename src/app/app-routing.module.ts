import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './users/register/register.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { ProfileComponent } from './users/profile/profile.component';
import { BookRoomComponent } from './bookings/book-room/book-room.component';
import { BookMealComponent } from './bookings/book-meal/book-meal.component';
import { MyBookingsComponent } from './bookings/my-bookings/my-bookings.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/sign-in', component: SignInComponent },
  { path: 'users/profile', component: ProfileComponent },
  { path: 'bookings/book-room', component: BookRoomComponent },
  { path: 'bookings/book-meal', component: BookMealComponent },
  { path: 'bookings/my-bookings', component: MyBookingsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
