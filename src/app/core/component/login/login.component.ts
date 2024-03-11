import { Component } from '@angular/core';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})


export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {
  }

  login() {
    this.loginService.login(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/menu']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}



