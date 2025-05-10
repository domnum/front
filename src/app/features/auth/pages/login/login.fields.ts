import { FormField } from '../../../../shared/components/form-builder/form-builder.component';
import { Validators } from '@angular/forms';

export const loginFields: FormField[] = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    validators: [Validators.required, Validators.email],
    errorMessages: {
      required: 'Email é obrigatório',
      email: 'Email inválido'
    },
    inputConfig: {
      placeholder: 'Digite seu email'
    }
  },
  {
    name: 'password',
    label: 'Senha',
    type: 'password',
    required: true,
    validators: [Validators.required, Validators.minLength(6)],
    errorMessages: {
      required: 'Senha é obrigatória',
      minlength: 'Senha deve ter no mínimo 6 caracteres'
    },
    inputConfig: {
      showToggleMask: true,
      feedback: false,
      placeholder: 'Digite sua senha'
    }
  }
];
