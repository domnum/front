// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { TokenService } from '../../../client/token.service';
import { environment } from '../../../../environments/environment';
import { BaseComponent } from '../../../shared/base/base.component';
import { Presentation } from '../../../client/src';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, delay } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseComponent {
  private _presentation: Presentation | null = null;
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-KEY': environment.API_KEY,
  });

  constructor(
    private tokenService: TokenService,
    private http: HttpClient,
  ) {
    super();
  }

  async getPresentation(): Promise<Presentation | null> {
    const token = this.tokenService.getToken();
    if (!token) return null;

    if (!this._presentation) {
      const credentials = {
        getToken: async () => {
          const currentToken = this.tokenService.getToken();
          if (!currentToken) return null;
          const expiresOnTimestamp = Date.now() + 3600 * 1000;
          return { token: currentToken, expiresOnTimestamp };
        },
      };
      this._presentation = new Presentation(credentials, environment.BACKEND_URL);
    }

    return this._presentation;
  }

  resetPresentation(): void {
    this._presentation = null;
  }

  login(form: { email: string; senha: string }): void {
    this.http
      .post<any>(`${environment.BACKEND_URL}/User/Login`, form, { headers: this.headers })
      .pipe(
        catchError(err => {
          this.showMessage('Erro ao realizar login.', 'error');
          return of(null);
        })
      )
      .subscribe(async response => {
        if (response?.token) {
          this.tokenService.setToken(response.token);
          this.resetPresentation();
          await this.getPresentation();
          this.navigateTo('/home');
        } else {
          this.showMessage(response?.message || 'Erro ao realizar login.', 'error');
        }
      });
  }

  register(formData: any): void {
    this.http
      .post<any>(`${environment.BACKEND_URL}/User/Register`, formData, { headers: this.headers })
      .pipe(
        catchError(error => {
          this.showMessage(error?.error || 'Erro ao registrar.', 'error');
          return throwError(() => error);
        })
      )
      .subscribe(response => {
        if (response?.statusCode && response.statusCode >= 400) {
          this.showMessage(response.message, 'error');
        } else {
          this.showMessage(response.message || 'Registrado com sucesso!', 'success');
        }
      });
  }

  forgotPassword(formData: { email: string }): void {
    this.http
      .put<any>(`${environment.BACKEND_URL}/User/Forgot-Password`, formData, { headers: this.headers })
      .pipe(
        catchError(error => {
          this.showMessage(error?.error || 'Erro ao solicitar redefinição.', 'error');
          return throwError(() => error);
        })
      )
      .subscribe(response => {
        this.showMessage(response.message || 'Solicitação enviada!', 'success');
      });
  }

  activateAccount(email: string, token: string): Observable<any> {
    const url = `${environment.BACKEND_URL}/User/Activate`;
    const params = new HttpParams()
      .set('email', email)
      .set('token', token);
    return this.http.put<any>(url, null, { headers: this.headers, params }).pipe(
      delay(10000) 
    );
  }
}