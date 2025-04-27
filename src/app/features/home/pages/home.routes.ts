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
        path: '',
        loadComponent: () => import('./home-page-component/home-page-component.component').
            then(m => m.HomePageComponent)
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
]; 