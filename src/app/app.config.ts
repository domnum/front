import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';
import MeuPreset from './themes/MeuPreset.component';
import { HTTP_CLIENT_SERVICE } from './services/dependency-injection-factory.service';
import { HttpClientService } from './services/http-client.service';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()), 
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MeuPreset,
        options: {
          darkModeSelector: '.modo-escuro'
        }
      }
    }), 
    provideHttpClient(),
    provideAnimations(),

    { provide: HTTP_CLIENT_SERVICE, useClass: HttpClientService },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
};
