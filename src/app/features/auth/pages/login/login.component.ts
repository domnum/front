import { Component, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common'; 
import { RouterModule, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { FormBuilderComponent, FormField } from '../../../../shared/components/form-builder/form-builder.component';
import { LogoComponent } from '../../../../shared/components/logo/logo.component';
import { AuthService } from '../../../../core/auth/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [CommonModule, DividerModule, ButtonModule, InputTextModule, ReactiveFormsModule,
        LogoComponent, FormsModule, PasswordModule, RouterModule, FormBuilderComponent]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading: boolean = false;

    loginFields: FormField[] = [
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            required: true,
            validators: [Validators.required, Validators.email],
            errorMessages: {
                required: 'Email é obrigatório',
                email: 'Email inválido'
            },
            inputConfig: {
                placeholder: 'Digite seu email'
            }
        },
        {
            name: 'password',
            label: 'Senha',
            type: 'password',
            required: true,
            validators: [Validators.required, Validators.minLength(6)],
            errorMessages: {
                required: 'Senha é obrigatória',
                minlength: 'Senha deve ter no mínimo 6 caracteres'
            },
            inputConfig: {
                showToggleMask: true,
                feedback: false,
                placeholder: 'Digite sua senha'
            }
        }
    ];

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    ngOnInit(): void {
        // Se já estiver autenticado, redireciona para home
        this.authService.isAuthenticated().subscribe(isAuthenticated => {
            if (isAuthenticated) {
                this.router.navigate(['/home']);
            }
        });
    }

    onLogin(): void {
        if (this.loginForm.valid) {
            this.loading = true;
            
            this.authService.login(this.loginForm.value)
                .pipe(finalize(() => this.loading = false))
                .subscribe({
                    next: () => {
                        this.router.navigate(['/home']);
                    },
                    error: (error) => {
                        console.error('Erro no login:', error);
                        // Aqui você pode adicionar uma notificação de erro
                    }
                });
        }
    }
}
