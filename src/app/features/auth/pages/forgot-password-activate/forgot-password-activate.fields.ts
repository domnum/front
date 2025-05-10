import { FormField } from '../../../../shared/components/form-builder/form-builder.component';

export const forgotPasswordActivateFields: FormField[] = [
  {
    name: 'password',
    label: 'Nova Senha',
    type: 'password',
    required: true,
    errorMessages: {
      required: 'Campo obrigatório',
      minlength: 'Mínimo 6 caracteres',
    },
    inputConfig: {
      showToggleMask: true,
      placeholder: 'Digite sua nova senha',
    },
  },
  {
    name: 'confirmPassword',
    label: 'Confirmar Nova Senha',
    type: 'password',
    required: true,
    errorMessages: {
      required: 'Campo obrigatório',
      mustMatch: 'As senhas não coincidem',
    },
    inputConfig: {
      showToggleMask: true,
      placeholder: 'Confirme sua nova senha',
    },
  },
];
