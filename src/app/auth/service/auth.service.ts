import { Injectable, inject } from "@angular/core";
import { CredentialsDto } from "../dto/credentials.dto";
import { Observable } from "rxjs";
import { LoginResponseDto } from "../dto/loginResponse.dto";
import { HttpClient } from "@angular/common/http";
import { APP_API } from "src/app/config/api.const";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient)
  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(APP_API.login, credentials);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}
