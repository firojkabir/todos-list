import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  id = '';
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private userService: UserService) {}

  onSubmit() {
    if (!this.userForm.valid) {
      return;
    }
    // const user = _.omitBy(this.userForm.value, _.isNil);

    this.userService.createUser(this.userForm.value).subscribe({
      // const user: User = _.pickBy({...this.userForm.value}, _.identity)

      next: () => {
        this.router.navigate(['login']);
      },
    });
  }
}
