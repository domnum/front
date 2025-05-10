import { Component } from '@angular/core';
import { FormBuilderComponent } from '../../../../shared/components/form-builder/form-builder.component';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../../../../shared/components/logo/logo.component';
import { BaseComponent } from '../../../../shared/base/base.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { registerFields } from './register.fields';
import { createRegisterForm } from './register.form-factory';
import { RegisterForm, RegisterPayload } from './register.model';
import { provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormBuilderComponent,
    LogoComponent,
    CommonModule
],
  template: `
      <app-logo></app-logo>
      <app-form-builder
        [fields]="fields"
        [form]="registerForm"
        [submitButtonLabel]="'Cadastrar'"
        [routersLinks]="routersLinks"
        (formSubmit)="onSignUp()"
        [title]="'Crie sua conta'">
      </app-form-builder>
  `,
  styles: [`
      
    `],
   providers: [provideNgxMask()]
})
export class RegisterComponent extends BaseComponent {
  registerForm: FormGroup<RegisterForm>;
  loading: boolean = false;

  fields = registerFields;

  routersLinks = [
    { label: 'Já tem conta?', routerLink: '/login' },
    { label: 'Voltar', routerLink: '/' }
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    super();
    this.registerForm = createRegisterForm(this.fb);
  }

  onSignUp() {
    if (this.registerForm.invalid) return;
    const formValue = this.registerForm.value;
    const payload = {
      email: formValue.email,
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      phoneNumber: formValue.phoneNumber,
      password: formValue.password
    };
    this.loading = true;
    this.authService.register(payload).subscribe({
      next: () => {
        this.loading = false;
        this.registerForm.reset();
        //IMPLEMENTAR REDIRECIONAMENTO PARA PAGINA DE ASSINATURA
        this.navigateTo('/auth/login');
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}

