import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginForm } from './login.model';

export function createLoginForm(fb: FormBuilder): FormGroup<LoginForm> {
  return fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  }) as FormGroup<LoginForm>;
}
