import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/pages/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/pages/home.routes').then(m => m.HOME_ROUTES)
  },
  {
    path: 'landing',
    loadChildren: () => import('./features/landing/pages/landing.routes').then(m => m.LANDING_ROUTES)
  },
  {
    path: 'animate',
    loadChildren: () => import('./features/animate/pages/animate.routes').then(m => m.ANIMATE_ROUTES)
  },
  {
    path: 'not-found',
    loadComponent: () => import('./shared/components/not-found/not-found.component').then(m => m.NotFoundComponent)
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];
