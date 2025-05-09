import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilderComponent } from '../../../../shared/components/form-builder/form-builder.component';
import { CommonModule } from '@angular/common';
import { provideNgxMask } from 'ngx-mask';
import { LogoComponent } from '../../../../shared/components/logo/logo.component';
import { BaseComponent } from '../../../../shared/base/base.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { passwordMatchValidator } from '../../../../shared/base/validators/password.validator';
import { MessageService } from 'primeng/api';
import { ThemeService } from '../../../../core/services/theme.service';

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
        (formSubmit)="onSignUp($event)"
        [title]="'Crie sua conta'">
      </app-form-builder>
  `,
  styles: [`
      
    `],
   providers: [provideNgxMask()]
})
export class RegisterComponent extends BaseComponent {
  registerForm: FormGroup;
  loading: boolean = false;

  fields = [
    {
      name: 'firstName',
      label: 'Nome',
      type: 'text',
      required: true,
      validators: [Validators.required],
      errorMessages: {
        required: 'O Nome é obrigatório.'
      } as Record<string, string>
    },
    {
      name: 'lastName',
      label: 'Sobrenome',
      type: 'text',
      required: true,
      validators: [Validators.required],
      errorMessages: {
        required: 'O Sobrenome é obrigatório.'
      } as Record<string, string>
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
      } as Record<string, string>
    },
    {
      name: 'phoneNumber',
      label: 'Número de Telefone',
      type: 'tel',
      required: true,
      mask: '(00) 00000-0000',
      validators: [Validators.required, Validators.pattern(/^\d{10,11}$/)],
      errorMessages: {
        required: 'O Telefone é obrigatório.',
        pattern: 'Número de telefone inválido. Use 10 ou 11 dígitos.'
      } as Record<string, string>
    },
    {
      name: 'password',
      label: 'Senha',
      type: 'password',
      required: true,
      validators: [Validators.required, Validators.minLength(6)],
      errorMessages: {
        required: 'A senha é obrigatória.',
        minLength: 'A senha deve ter pelo menos 6 caracteres.'
      } as Record<string, string>
    },
    {
      name: 'confirmPassword',
      label: 'Confirme a Senha',
      type: 'password',
      required: true,
      validators: [Validators.required , Validators.minLength(6), ],
      errorMessages: {
        required: 'A confirmação da senha é obrigatória.',
        passwordMismatch: 'As senhas não coincidem.'
      } as Record<string, string>
    }
  ];

  routersLinks = [
    { label: 'Já tem conta?', routerLink: '/login' },
    { label: 'Voltar', routerLink: '/' }
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    super();
    this.registerForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });

    const controls: any = {};
    this.fields.forEach(field => {
      controls[field.name] = ['', field.validators || []];
    });

    this.registerForm = this.fb.group(controls, { validators: passwordMatchValidator('password', 
      'confirmPassword') });
  }

  async onSignUp(formData: any) {
    await this.authService.register(formData);
  }
}
