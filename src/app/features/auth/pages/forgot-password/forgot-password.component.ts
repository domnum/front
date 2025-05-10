import { Component } from '@angular/core';
import { LogoComponent } from "../../../../shared/components/logo/logo.component";
import { FormBuilderComponent } from "../../../../shared/components/form-builder/form-builder.component";
import { BaseComponent } from '../../../../shared/base/base.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { forgotPasswordFields } from './forgot-password.fields';
import { createForgotPasswordForm } from './forgot-password.form-factory';
import { ForgotPasswordForm, ForgotPasswordPayload } from './forgot-password.model';

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

  form: FormGroup<ForgotPasswordForm>;
  fields = forgotPasswordFields;

  routersLinks = [
    { label: 'Cadastre-se', routerLink: '/auth/register' },
    { label: 'Voltar para Login', routerLink: '/auth/login' },
  ];
  
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
  ) {

    super();
    this.form = createForgotPasswordForm(this.fb);
  }

  async onForgotPassword(formData: ForgotPasswordForm | any) {
    if (this.form.invalid) return;
    const payload: ForgotPasswordPayload = {
      email: formData.email || formData.email?.value || ''
    };
    this.authService.forgotPassword(payload).subscribe({
      next: () => {
        this.form.reset();
        this.navigateTo('/auth/login');
      },
      error: () => {
        this.form.reset();}
    });
  }
}
