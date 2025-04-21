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


@Component({
    selector: 'divider-login-demo',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [DividerModule, ButtonModule, InputTextModule, ReactiveFormsModule,
        LogoComponent,FormsModule, PasswordModule,CheckboxModule]
})


export class LoginComponent implements OnInit {
    loginForm!: FormGroup;  // Usando o operador de asserção não nula '!'
    darkMode: boolean = false;
    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    onLogin() {
        const { username, password } = this.loginForm.value;
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/;

        if (!regex.test(password)) {
            alert('A senha deve conter pelo menos:\n- Uma letra maiúscula\n- Uma letra minúscula\n- Um caractere especial');
            return;
        }
        if (password.length < 6) {
            alert('A senha não pode ser menor que 6 caracteres!');
            return;
        }
        if (this.loginForm.valid) {
            alert('Login efetuado com');
            // Aqui você pode chamar um serviço de login, etc.
        } else {
            alert('Inválido!');
        }

    }

    username: string = '';
    password: string = '';
    checked: boolean = false;
    email: string = '';
}
