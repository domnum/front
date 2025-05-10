import { FormControl } from '@angular/forms';

export interface ForgotPasswordActivateForm {
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}

export interface ForgotPasswordActivatePayload {
  token: string;
  newPassword: string;
}
