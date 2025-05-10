import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormField, FormBuilderComponent } from '../../../../shared/components/form-builder/form-builder.component';
import { BaseComponent } from '../../../../shared/base/base.component';
import { AuthService } from '../../services/auth.service';
import { LogoComponent } from "../../../../shared/components/logo/logo.component";
import { forgotPasswordActivateFields } from './forgot-password-activate.fields';
import { createForgotPasswordActivateForm } from './forgot-password-activate.form-factory';
import { ForgotPasswordActivateForm, ForgotPasswordActivatePayload } from './forgot-password-activate.model';

@Component({
  selector: 'app-forgot-password-activate',
  templateUrl: './forgot-password-activate.component.html',
  imports: [FormBuilderComponent, LogoComponent],
})
export class ForgotPasswordActivateComponent extends BaseComponent
 implements OnInit {
  form!: FormGroup<ForgotPasswordActivateForm>;
  formFields: FormField[] = forgotPasswordActivateFields;
  private token: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {
    super();
  }

  routersLinks = [
    { label: 'Cadastre-se', routerLink: '/auth/register' },
    { label: 'Voltar para Login', routerLink: '/auth/login' },
  ];

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token') ?? '';
    if (!this.token) {
      this.navigateTo('/auth/login'); 
      return;
    }
    this.form = createForgotPasswordActivateForm(this.fb);
  }

  async onSubmit(values: ForgotPasswordActivateForm): Promise<void> {
    const payload: ForgotPasswordActivatePayload = {
      token: this.token,
      newPassword: values.password?.value ?? values.password
    };
    await this.authService.forgotPasswordActivate(payload);
  }
}
