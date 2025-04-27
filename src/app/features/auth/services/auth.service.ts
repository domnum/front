import { Injectable } from '@angular/core';
import { Presentation } from '../../../client/src';
import { TokenService } from '../../../client/token.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _presentation: Presentation | null = null;

  constructor(private tokenService: TokenService) {}

  async getPresentation(): Promise<Presentation | null> {
    const token = this.tokenService.getToken();
    if (!token) {
      return null; 
    }

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
}
