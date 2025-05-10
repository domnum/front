import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { passwordMatchValidator } from '../../../../shared/base/validators/password.validator';
import { ForgotPasswordActivateForm } from './forgot-password-activate.model';

export function createForgotPasswordActivateForm(fb: FormBuilder):
 FormGroup<ForgotPasswordActivateForm> {
  return fb.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
  }, {
    validators: passwordMatchValidator('password', 'confirmPassword')
  }) as FormGroup<ForgotPasswordActivateForm>;
}
