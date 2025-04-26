import { Inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HTTP_CLIENT_SERVICE } from './dependency-injection-factory.service';
import { IHttpClient } from '../../interfaces/http-client.interface';
import { TokenService } from './token.service';
import { Router } from '@angular/router';
import { LoginResponse } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endpoint = 'user';

  constructor(
    @Inject(HTTP_CLIENT_SERVICE) private httpService: IHttpClient,
    private tokenService: TokenService,
    private router: Router
  ) {}

  login(credentials: { email: string; password: string }): Observable<LoginResponse> {
    return this.httpService.post<LoginResponse>(this.endpoint + "/login", credentials, {}, true).pipe(
      tap(response => {
        if (response && response.token) {
          this.tokenService.setToken(response.token);
        }
      })
    );
  }

  register(credentials: {
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    phoneNumber: string
  }): Observable<any> {
    return this.httpService.post(this.endpoint + "/register", credentials, {}, true);
  }

  activate(credentials: { email: string, code: any }, finalEndpoint: string): Observable<any> {
    return this.httpService.put(
      this.endpoint + finalEndpoint,
      null,
      {},
      true,
      { email: credentials.email, code: credentials.code }
    );
  }

  forgotPassword(email: string): Observable<any> {
    return this.httpService.put(this.endpoint + "/forgot-password", { email }, {}, true);
  }

  resendCode(email: string): Observable<any> {
    return this.httpService.put(this.endpoint + "/resend-code", { email }, {}, true);
  }

  logout(): void {
    this.tokenService.removeToken();
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): Observable<boolean> {
    return this.tokenService.isAuthenticated();
  }
}
