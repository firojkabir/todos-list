import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoggedIn = false;
  constructor(private router: Router, private authService: AuthService) {
    this.authService.isLoggedIn.subscribe({
      next: (isLoggedIn: boolean) => {
        this.isLoggedIn = isLoggedIn;
      },
    });
  }

  ngOnInit() {}

  logout = () => {
    this.authService.logout();
    this.router.navigate(['login']);
  };

  navigateToTodoList = () => {
    this.router.navigate(['todos']);
  };

  navigateToLogin = () => {
    this.router.navigate(['login']);
  };

  navigateToRegister = () => {
    this.router.navigate(['register']);
  };
}
