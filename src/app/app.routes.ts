import { Routes } from '@angular/router';
import { LandingpageLayoutComponent } from './layouts/ladingpage-layout/landingpage-layout.component';
import { LandingPageComponent } from './lading/ladingpage/landingpage.component';
import { LoginComponent } from './pages/login/login.component';
export const routes: Routes = [
  {
    path: '',
    component: LandingpageLayoutComponent,
    children: [
      { path: 'landing', component: LandingPageComponent}, 
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
    ]
  },
  {
    path: 'login',
    component: LoginComponent  
  },
  {
    path: '**',
    redirectTo: 'landing'
  }
];
