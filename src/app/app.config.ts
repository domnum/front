import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';
import MeuPreset from './themes/MeuPreset.component';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Presentation } from './client/src/presentation';
import { environment } from '../environments/environment';
import { TokenService } from './client/token.service';

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

    {
      provide: Presentation,
      useFactory: (tokenService: TokenService) => {
        const credentials = {
          getToken: async () => {
            const token = tokenService.getToken();
            if (!token) {
              return null;
            }
    
            const expiresOnTimestamp = Date.now() + 3600 * 1000; 
            return { token, expiresOnTimestamp };
          },
        };
    
        const baseUrl = environment.BACKEND_URL;  
        return new Presentation(credentials, baseUrl);
      },
      deps: [TokenService], 
    },
  ]
};
