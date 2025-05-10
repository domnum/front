import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordForm } from './forgot-password.model';

export function createForgotPasswordForm(fb: FormBuilder): FormGroup<ForgotPasswordForm> {
  return fb.group({
    email: ['', [Validators.required, Validators.email]],
  }) as FormGroup<ForgotPasswordForm>;
}
