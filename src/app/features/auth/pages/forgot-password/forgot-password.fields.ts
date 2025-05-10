import { FormField } from '../../../../shared/components/form-builder/form-builder.component';
import { Validators } from '@angular/forms';

export const forgotPasswordFields: FormField[] = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    validators: [Validators.required, Validators.email],
    errorMessages: {
      required: 'O Email é obrigatório.',
      email: 'O Email informado é inválido.'
    }
  }
];
