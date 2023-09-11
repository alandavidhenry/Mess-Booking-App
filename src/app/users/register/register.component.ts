import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  user: User = new User();

  constructor(private router: Router,
              private userService: UserService) {}
  
  saveUser(): void {
    this.userService.create(this.user).then(() => {
      console.log('Created new user successfully!');
      this.router.navigate(['/users', 'sign-in']);
    });
  }

}
