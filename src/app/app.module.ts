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
import { BookRoomComponent } from './bookings/book-room/book-room.component';
import { BookMealComponent } from './bookings/book-meal/book-meal.component';
import { MyBookingsComponent } from './bookings/my-bookings/my-bookings.component';

import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { AddUserComponent } from './users/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    BookRoomComponent,
    BookMealComponent,
    MyBookingsComponent,
    EditUserComponent,
    UserFormComponent,
    UsersListComponent,
    AddUserComponent,
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
