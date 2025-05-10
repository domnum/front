import { Component, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { FormBuilderComponent } from '../../../../shared/components/form-builder/form-builder.component';
import { LogoComponent } from '../../../../shared/components/logo/logo.component';
import { BaseComponent } from '../../../../shared/base/base.component';
import { TokenService } from '../../../../client/token.service';
import { AuthService } from '../../services/auth.service';
import { loginFields } from './login.fields';
import { createLoginForm } from './login.form-factory';
import { LoginForm, LoginPayload } from './login.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [CommonModule, DividerModule, ButtonModule, InputTextModule, ReactiveFormsModule,
        LogoComponent, FormsModule, PasswordModule, RouterModule, FormBuilderComponent]
})
export class LoginComponent extends BaseComponent implements OnInit {
    loginForm: FormGroup<LoginForm>;
    loading: boolean = false;
    loginFields: typeof loginFields = loginFields;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private tokenService: TokenService
    ) {
        super();
        this.loginForm = createLoginForm(this.fb);
    }

    ngOnInit(): void {
        this.tokenService.isAuthenticated().subscribe(isAuthenticated => {
            if (isAuthenticated) {
                this.router.navigate(['/home']);
            }
        });
    }
    async onLogin(): Promise<void> {
        if (this.loginForm.valid) {
            const payload = {
                email: this.loginForm.get('email')!.value as string,
                password: this.loginForm.get('password')!.value as string
            };
            this.loading = true;
            await this.authService.login(payload);
            this.loading = false;
        }
    }
}
