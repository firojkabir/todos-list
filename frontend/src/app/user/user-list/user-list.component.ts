import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  users: any[] = [];

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (users: any[]) => {
        this.users = users;
      },
    });
  }

  deleteUserById = (id: string) => {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter((todo) => todo._id != id);
      },
    });
  };

  navigateToEditUser = (id: string) => {
    this.router.navigate([`users/${id}/edit`]);
  };
}
