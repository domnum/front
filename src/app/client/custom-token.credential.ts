import { TokenCredential, AccessToken } from '@azure/core-auth';
import { TokenService } from './token.service';

export class CustomTokenCredential implements TokenCredential {
  constructor(private tokenService: TokenService) {}

  async getToken(): Promise<AccessToken | null> {
    return this.tokenService.getAccessToken();
  }
}