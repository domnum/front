import { Routes } from '@angular/router';
import { AuthGuard } from '../../core/guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];
