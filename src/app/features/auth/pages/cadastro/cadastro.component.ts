import { Component, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { LogoComponent } from '../../../../shared/components/logo/logo.component';
import { ThemeToggleComponent } from '../../../../shared/components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'divider-login-demo',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  standalone: true,
  imports: [CommonModule, DividerModule, ButtonModule, InputTextModule, ReactiveFormsModule,
    LogoComponent, FormsModule, PasswordModule, CheckboxModule, IconFieldModule, InputIconModule
    , RouterModule, ThemeToggleComponent, ToastModule, TooltipModule],
  providers: [MessageService]
})

export class CadastroComponent implements OnInit {
  formCadastro!: FormGroup;
  senhaRegex: string = '^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$';
  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit(): void {
    this.formCadastro = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      endereco: ['', Validators.required],
      senha: [
        '',
        [
          Validators.required,
          Validators.pattern(this.senhaRegex)
        ]
      ],
      confirmarSenha: ['', Validators.required],
      AceiteTermo: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    const { nome, email, endereco, senha, confirmarSenha,AceiteTermo } = this.formCadastro.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.messageService.add({
        severity: 'error',
        summary: 'Atenção!',
        detail: 'E-mail inválido!',
      });
      return;
    }

    if (senha.length < 6) {
      this.messageService.add({
        severity: 'error',
        summary: 'Atenção!',
        detail: 'A senha deve ter no mínimo 6 caracteres!',
      });
      return;
    }

    if (senha !== confirmarSenha) {
      this.messageService.add({
        severity: 'error',
        summary: 'Atenção!',
        detail: 'A senha deve ser a mesma da confirma senha!',
      });
      return;
    }

    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/;
    if (!senhaRegex.test(senha)) {
      this.messageService.add({
        severity: 'error',
        summary: 'Atenção!',
        detail: 'A senha deve conter letra maiúscula, minúscula e um caractere especial!',
      });
      return;
    }

    if (this.formCadastro.valid) {
      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso!',
        detail: 'Cadastro realizado com sucesso!',
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Atenção!',
        detail: 'Por favor, preencha todos os campos obrigatórios.',
      });
      this.formCadastro.markAllAsTouched();
    }
  }

  isInvalid(campo: string): boolean {
    const control = this.formCadastro.get(campo);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}