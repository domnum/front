import { Routes } from '@angular/router';
import { LandingpageLayoutComponent } from '../../layouts/ladingpage-layout/landingpage-layout.component';
import { LandingPageComponent } from './landingpage.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingpageLayoutComponent,
    children: [
      {
        path: 'Landing',
        component: LandingPageComponent
      }
    ]
  }
];
