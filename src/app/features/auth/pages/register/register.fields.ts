import { FormField } from '../../../../shared/components/form-builder/form-builder.component';
import { Validators } from '@angular/forms';

export const registerFields: FormField[] = [
  {
    name: 'firstName',
    label: 'Nome',
    type: 'text',
    required: true,
    validators: [Validators.required],
    errorMessages: {
      required: 'O Nome é obrigatório.'
    }
  },
  {
    name: 'lastName',
    label: 'Sobrenome',
    type: 'text',
    required: true,
    validators: [Validators.required],
    errorMessages: {
      required: 'O Sobrenome é obrigatório.'
    }
  },
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
  },
  {
    name: 'phoneNumber',
    label: 'Número de Telefone',
    type: 'tel',
    required: true,
    mask: '(00) 00000-0000',
    validators: [Validators.required, Validators.pattern(/^[0-9]{10,11}$/)],
    errorMessages: {
      required: 'O Telefone é obrigatório.',
      pattern: 'Número de telefone inválido. Use 10 ou 11 dígitos.'
    }
  },
  {
    name: 'password',
    label: 'Senha',
    type: 'password',
    required: true,
    validators: [Validators.required, Validators.minLength(6)],
    errorMessages: {
      required: 'A senha é obrigatória.',
      minlength: 'A senha deve ter pelo menos 6 caracteres.'
    }
  },
  {
    name: 'confirmPassword',
    label: 'Confirme a Senha',
    type: 'password',
    required: true,
    validators: [Validators.required, Validators.minLength(6)],
    errorMessages: {
      required: 'A confirmação da senha é obrigatória.',
      passwordMismatch: 'As senhas não coincidem.'
    }
  }
];
