import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/config/routes.const';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private authService = inject(AuthService);
  private toaster = inject(ToastrService);
  private router = inject(Router);
  login(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.id);
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (err: any) => {
        this.toaster.error('Veuillez vérifier vos credentials');
      }
    })
  }
}
