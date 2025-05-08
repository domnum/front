import { Injectable } from '@angular/core';
import { Presentation } from '../../../client/src';
import { TokenService } from '../../../client/token.service';
import { environment } from '../../../../environments/environment';
import { BaseComponent } from '../../../shared/base/base.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseComponent{
  private _presentation: Presentation | null = null;

  constructor(
    private tokenService: TokenService,
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

  async login(form: { email: string; senha: string }): Promise<void> {
    try {
      const response = await fetch(`${environment.BACKEND_URL}/User/Login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': environment.API_KEY,
        },
        body: JSON.stringify(form),
      }).then(res => res.json());

      if (response?.token) {
        this.tokenService.setToken(response.token);
        this.resetPresentation();
        await this.getPresentation();
        this.navigateTo('/home');
      } else {
        this.showMessage(response?.message || 'Erro ao realizar login.', 'error');
      }
    } catch (error) {
      this.showMessage('Erro ao realizar login.', 'error');
    }
  }
  
  async register(formData: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
  }): Promise<any> {
    try {
      const response = await fetch(`${environment.BACKEND_URL}/User/Register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': environment.API_KEY,
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        this.showMessage(response, 'error');
      }
      this.showMessage(response, 'success');
    } catch (error: any) {
      this.showMessage(error, 'error');
    }
  }

  async forgotPassword(formData: {
    email: string;
  }): Promise<any> {
    try {
      const response = await fetch(`${environment.BACKEND_URL}/User/Forgot-Password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': environment.API_KEY,
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        this.showMessage(response, 'error');
      }
      this.showMessage(response, 'success');
    } catch (error: any) {
      this.showMessage(error, 'error');
    }
  }
}
