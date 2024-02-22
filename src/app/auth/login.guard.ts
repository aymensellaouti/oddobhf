import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { APP_ROUTES } from '../config/routes.const';


// si elle retourne true iet3ada sinon ma iet3adach
export const loginGuard: CanActivateFn = (route, state) => {
  // Todo : check if user is  logged in
  const authService = inject(AuthService);
  const router = inject(Router);
  if (!authService.isAuthenticated()) {
    router.navigate([APP_ROUTES.login]);
    return false;
  }
  return true;
};
