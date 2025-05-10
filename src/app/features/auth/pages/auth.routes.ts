import { Routes } from '@angular/router';
import { AuthLayoutComponent } from '../layouts/auth-layout/auth-layout.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'register',
          loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent)
      },
      {
        path: 'forgot-password',
        loadComponent: () => import('./forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
      },
      {
        path: 'activate-account',
        loadComponent: () => import('./activate-account/activate-account.component').then(m => m.ActivateAccountComponent)
      },
      {
        path: 'forgot-password-activate',
        loadComponent: () => import('./forgot-password-activate/forgot-password-activate.component').then(m => m.ForgotPasswordActivateComponent)
      },
    ]
  }
]; 