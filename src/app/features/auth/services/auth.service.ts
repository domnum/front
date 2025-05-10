import { Injectable } from '@angular/core';
import { TokenService } from '../../../client/token.service';
import { environment } from '../../../../environments/environment';
import { BaseComponent } from '../../../shared/base/base.component';
import { Presentation } from '../../../client/src';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, delay, tap } from 'rxjs/operators';
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

  login(form: { email: string; password: string }): void {
    this.http
      .post<any>(`${environment.BACKEND_URL}/User/Login`, form, { headers: this.headers })
      .pipe(
        catchError(err => {
          return throwError(() => err);
        })
      )
      .subscribe({
        next: async (response) => {
          if (response?.token) {
            this.tokenService.setToken(response.token);
            this.resetPresentation();
            await this.getPresentation();
            this.navigateTo('/home');
          } else {
            this.showMessage(response?.message || 'Erro ao realizar login.', 'error');
          }
        },
        error: (err) => {
          this.showMessage(err?.error || 'Erro ao realizar login.', 'error');
        }
      });
  }

  register(formData: any): Observable<any> {
    return this.http
      .post<any>(`${environment.BACKEND_URL}/User/Register`, formData, { headers: this.headers })
      .pipe(
        catchError(error => {
          this.showMessage(error?.error || 'Erro ao registrar.', 'error');
          return throwError(() => error);
        }),
        tap((response: any) => {
          if (response && response.message) {
            this.showMessage(response.message, 'success');
          }
        })
      );
  }

  forgotPassword(formData: { email: string }): Observable<any> {
    const params = new HttpParams().set('email', formData.email);
    return this.http
      .put<any>(`${environment.BACKEND_URL}/User/Forgot-Password`, null, 
        { headers: this.headers, params })
      .pipe(
        catchError(error => {
          this.showMessage(error?.error || 'Erro ao solicitar redefinição.', 'error');
          return throwError(() => error);
        }),
        tap((response: any) => {
            this.showMessage(response, 'success');
        })
      );
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

  forgotPasswordActivate(formData: { token: string; newPassword: string }): void {
    this.http
      .put<any>(`${environment.BACKEND_URL}/User/Forgot-Password/Activate`, formData, 
        { headers: this.headers })
      .pipe(
        catchError(error => {
          this.showMessage(error?.error || 'Erro ao redefinir a senha.', 'error');
          return throwError(() => error);
        })
      )
      .subscribe(response => {
        this.showMessage(response || 'Senha redefinida com sucesso!', 'success');
        this.navigateTo('auth/login');
      });
  }
}