import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(
    private loginService: LoginService,
    private router: Router,
    public route: ActivatedRoute,
  ) {}

  logout() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }
}