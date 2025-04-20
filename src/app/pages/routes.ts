import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  {
    path: 'home',
    loadChildren: () => import('./home-pages/routes').then(m => m.routes)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
