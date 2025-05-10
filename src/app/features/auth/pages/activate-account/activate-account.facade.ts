import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivateAccountParams } from './activate-account.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ActivateAccountFacade {
  constructor(private authService: AuthService) {}

  activate(params: ActivateAccountParams): Observable<any> {
    return this.authService.activateAccount(params.email, params.token);
  }
}
