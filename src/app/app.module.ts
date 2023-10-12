import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingsListComponent } from './bookings/bookings-list/bookings-list.component';
import { BookRoomComponent } from './bookings/book-room/book-room.component';
import { EditRoomComponent } from './bookings/edit-room/edit-room.component';
import { RoomFormComponent } from './bookings/room-form/room-form.component';
import { BookMealComponent } from './bookings/book-meal/book-meal.component';
import { EditMealComponent } from './bookings/edit-meal/edit-meal.component';
import { MealFormComponent } from './bookings/meal-form/meal-form.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { ProfileComponent } from './users/profile/profile.component';
import { SignInComponent } from './users/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    BookingsListComponent,
    BookRoomComponent,
    EditRoomComponent,
    RoomFormComponent,
    BookMealComponent,
    EditMealComponent,
    MealFormComponent,
    UsersListComponent,
    AddUserComponent,
    EditUserComponent,
    UserFormComponent,
    ProfileComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
