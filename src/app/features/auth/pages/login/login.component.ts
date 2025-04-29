import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common'; 
import { RouterModule, Router } from '@angular/router';
import { FormBuilderComponent, FormField } from '../../../../shared/components/form-builder/form-builder.component';
import { LogoComponent } from '../../../../shared/components/logo/logo.component';
import { BaseComponent } from '../../../../shared/base/base.component';
import { ThemeService } from '../../../../core/services/theme.service';
import { TokenService } from '../../../../client/token.service';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../../../environments/environment';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [CommonModule, DividerModule, ButtonModule, InputTextModule, ReactiveFormsModule,
        LogoComponent, FormsModule, PasswordModule, RouterModule, FormBuilderComponent]
})
export class LoginComponent extends BaseComponent implements OnInit {
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
        private tokenService: TokenService,
        protected override router: Router,
        protected override messageService: MessageService,
        @Inject(PLATFORM_ID) protected override platformId: Object,
        @Inject(ThemeService) protected override themeService: ThemeService
    ) {
        super(messageService, router, platformId, themeService);
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    ngOnInit(): void {
        this.tokenService.isAuthenticated().subscribe(isAuthenticated => {
            if (isAuthenticated) {
                this.router.navigate(['/home']);
            }
        });
    }
    onLogin(): void {
        if (this.loginForm.valid) {
          this.loading = true;
          this.authService.getPresentation() 
            .then(async (presentation) => {
              const loginData = this.loginForm.value;
              const response = await fetch(`${environment.BACKEND_URL}/User/Login`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'X-API-KEY': environment.API_KEY,
                },
                body: JSON.stringify(loginData),
              }).then((res) => res.json());
      
              if (response?.token) {
                this.tokenService.setToken(response.token);
                this.authService.resetPresentation();
                await this.authService.getPresentation(); 
      
                this.router.navigate(['/home']);
              } else {
                this.showMessage(response, 'error');
              }
            })
            .catch((error) => {
              this.showMessage(error || 'Erro ao realizar login.', 'error');
            })
            .finally(() => {
              this.loading = false;
            });
        }
      }
}
