import { Routes } from '@angular/router';
import { LandingPageComponent } from './landingpage-component/landingpage.component';
  import { LandingpageLayoutComponent } from '../layouts/ladingpage-layout/landingpage-layout.component'; 

export const LANDING_ROUTES: Routes = [
  {
    path: '',
    component: LandingpageLayoutComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent
      }
    ]
  }
];