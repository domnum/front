import { Routes } from '@angular/router';
import { LandingpageLayoutComponent } from './layouts/ladingpage-layout/landingpage-layout.component';
import { LandingPageComponent } from './lading/ladingpage/landingpage.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
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
     path: 'pages',
     loadChildren: () => import('./pages/routes').then(m => m.routes)
  },
  {
        path: 'login',
        component: LoginComponent  
      },
      {
        path: 'cadastro',
        component: CadastroComponent  
      },
  {
    path: '**',
    redirectTo: 'landing'
  }
];
