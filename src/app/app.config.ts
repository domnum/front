import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';
import MeuPreset from './themes/MeuPreset.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TokenService } from './client/token.service';
import { AuthService } from './features/auth/services/auth.service';

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
          darkModeSelector: '.modo-escuro',
        },
      },
    }),
    provideHttpClient(),
    provideAnimations(),
    TokenService,
    AuthService,
  ]
};
