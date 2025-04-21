import { Component, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoComponent } from "../../components/logo/logo.component";
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common'; 

@Component({
    selector: 'divider-login-demo',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [CommonModule, DividerModule, ButtonModule, InputTextModule, ReactiveFormsModule,
        LogoComponent, FormsModule, PasswordModule, CheckboxModule]
})

export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    darkMode: boolean = false;
    email: string = '';
    password: string = '';

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        // Formulário com validação
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],  // Validação de email
            password: ['', [Validators.required, Validators.minLength(6)]]  // Validação de senha
        });
    }

    onLogin() {
        if (this.loginForm.valid) {
            const { email, password } = this.loginForm.value;
            console.log('Email:', email);
            console.log('Senha:', password);
            alert('Login efetuado com sucesso!');
            // Aqui você pode adicionar sua lógica de autenticação com o email e senha
        } else {
            alert('Formulário inválido!');
        }
    }

    checked: boolean = false;
}
