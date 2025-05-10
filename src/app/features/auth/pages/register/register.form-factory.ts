import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../../../shared/base/validators/password.validator';
import { RegisterForm } from './register.model';

export function createRegisterForm(fb: FormBuilder): FormGroup<RegisterForm> {
  return fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10,11}$/)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  }, { validators: passwordMatchValidator('password', 'confirmPassword') }) as FormGroup<RegisterForm>;
}
