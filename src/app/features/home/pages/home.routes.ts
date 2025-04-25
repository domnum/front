import { Routes } from '@angular/router';
import { HomeLayoutComponent } from '../layouts/home-layout-component/home-layout-component.component';
import { AuthGuard } from '../../../core/guard/auth.guard';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home-page-component/home-page-component.component').
            then(m => m.HomePageComponentComponent)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
]; 