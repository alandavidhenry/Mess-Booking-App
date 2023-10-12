import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent implements OnInit {
  users$: Observable<User[]> = new Observable();
  
  constructor(private usersService: UserService) { }
  
  ngOnInit(): void {
    this.fetchUsers();
  }
  
  deleteUser(id: string): void {
    if (confirm("Are you sure you want to delete this user?")) {
      this.usersService.deleteUser(id).subscribe({
        next: () => this.fetchUsers()
      });
    } else {}
  }
  
  private fetchUsers(): void {
    this.users$ = this.usersService.getUsers();
  }
 }