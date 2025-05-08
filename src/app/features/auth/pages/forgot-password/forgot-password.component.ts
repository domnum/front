import { Component } from '@angular/core';
import { LogoComponent } from "../../../../shared/components/logo/logo.component";
import { FormBuilderComponent } from "../../../../shared/components/form-builder/form-builder.component";
import { BaseComponent } from '../../../../shared/base/base.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { passwordMatchValidator } from '../../../../shared/base/validators/password.validator';

@Component({
  selector: 'app-forgot-password',
  imports: [LogoComponent, FormBuilderComponent],
  template: `
      <app-logo></app-logo>
      <app-form-builder
          [fields]="fields"
          [form]="form"
          [submitButtonLabel]="'Recuperar Senha'"
          [routersLinks]="routersLinks"
          (formSubmit)="onForgotPassword($event)"
          [title]="'Recupere sua Senha'">
        </app-form-builder>
  `,
  styles: ``
})

export class ForgotPasswordComponent extends BaseComponent {

  form: FormGroup;
  fields = [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      validators: [Validators.required, Validators.email],
      errorMessages: {
        required: 'O Email é obrigatório.',
        email: 'O Email informado é inválido.'
      } as Record<string, string>
    },
  ];

  routersLinks = [
    { label: 'Cadastre-se', routerLink: '/auth/register' }
  ];
  
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
  ) {

    super();
    this.form = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
      },
    );
  }

  async onForgotPassword(formData: any) {
    if (this.form.invalid) return;
    await this.authService.forgotPassword(formData.email);
  }
}
