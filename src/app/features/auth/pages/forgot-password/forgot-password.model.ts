import { FormControl } from '@angular/forms';

export interface ForgotPasswordForm {
  email: FormControl<string>;
}

export interface ForgotPasswordPayload {
  email: string;
}
