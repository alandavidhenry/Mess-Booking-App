import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent {
  constructor(
    private router: Router,
    private userService: UserService
  ) { }
  
  addUser(user: User) {
    this.userService.createUser(user)
      .subscribe({
        next: () => {
          this.router.navigate(['/users']);
        },
        error: (error) => {
          alert("Failed to create user");
          console.error(error);
        }
      });
  }
 }