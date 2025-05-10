import { ActivatedRoute } from '@angular/router';
import { ActivateAccountParams } from './activate-account.model';

export function getActivateAccountParams(route: ActivatedRoute): ActivateAccountParams | null {
  const email = route.snapshot.queryParamMap.get('email');
  const token = route.snapshot.queryParamMap.get('token');
  if (email && token) {
    return { email, token };
  }
  return null;
}
