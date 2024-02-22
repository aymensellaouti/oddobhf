import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    /*
      je vérifie si je suis authentifié
      Si oui je clone la requete et j'y intégre le token
      Sinon je lle laisser continuer
    */
    if (this.authService.isAuthenticated()) {
      // const params = new HttpParams().set(
      //   'access_token',
      //   localStorage.getItem('token') ?? ''
      // );
      const headers = new HttpHeaders().set(
        'Authorization',
        localStorage.getItem('token') ?? ''
      );
      const newReq = request.clone({headers});
      return next.handle(newReq);
    }
    //console.log('HTTP intercept');

    return next.handle(request);
  }
}
