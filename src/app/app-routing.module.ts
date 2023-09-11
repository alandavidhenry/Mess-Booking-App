import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './users/register/register.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { ProfileComponent } from './users/profile/profile.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/sign-in', component: SignInComponent },
  { path: 'users/profile', component: ProfileComponent },
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
