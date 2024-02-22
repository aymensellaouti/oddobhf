import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { APP_ROUTES } from 'src/app/config/routes.const';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public authService = inject(AuthService);
  public router = inject(Router);

  logout() {
    this.authService.logout();
    this.router.navigate([APP_ROUTES.login])
  }
}
