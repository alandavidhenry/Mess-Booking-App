import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(private userService: UserService) {  }

  users: any = [];

  refreshUsers() {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
    })
  }

  ngOnInit() {
    this.refreshUsers();
  }

  addUsers(email: string, password: string) {
    this.userService.addUser(email, password).then((res) => {
      this.refreshUsers();
    })
  }

  deleteUsers(id: string) {
    this.userService.deleteUser(id).then((res) => {
      this.refreshUsers();
    })
  }
}