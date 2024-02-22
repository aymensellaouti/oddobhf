import { CanActivateFn } from '@angular/router';


// si elle retourne true iet3ada sinon ma iet3adach
export const loginGuard: CanActivateFn = (route, state) => {
  return true;
};
