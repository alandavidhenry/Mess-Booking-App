import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { firebaseConfig } from '../environments/environment';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { RegisterComponent } from './users/register/register.component';
import { ProfileComponent } from './users/profile/profile.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { BookRoomComponent } from './bookings/book-room/book-room.component';
import { BookMealComponent } from './bookings/book-meal/book-meal.component';
import { MyBookingsComponent } from './bookings/my-bookings/my-bookings.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    RegisterComponent,
    ProfileComponent,
    FooterComponent,
    HeaderComponent,
    BookRoomComponent,
    BookMealComponent,
    MyBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
