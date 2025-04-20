import { Routes } from '@angular/router';
import { AuthGuard } from '../../core/guard/auth.guard';
import { HomeLayoutComponentComponent } from '../../layouts/home-layout/home-layout-component/home-layout-component.component';
import { HomePageComponentComponent } from './home/main/home-page-component/home-page-component.component';

export const routes: Routes = [
  {
    path: 'main',
    component: HomeLayoutComponentComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      {
        path: '',
        component: HomePageComponentComponent
      },
      {
        path: '**',
        redirectTo: 'main'
      }
    ]
  }
];
