import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-component/about.component';
import { LandingpageLayoutComponent } from '../../../features/landing/layouts/ladingpage-layout/landingpage-layout.component';

export const ABOUT_ROUTES: Routes = [
  {
    path: '',
        
    component: LandingpageLayoutComponent,
    children: [
        {
            path: '',
            component: AboutUsComponent
        }
    ]
    
  }
];

