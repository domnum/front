import { InjectionToken } from '@angular/core';
import { IHttpClient } from '../core/interfaces/http-client.interface';

// 🔹 Criando tokens para injeção de dependência
export const HTTP_CLIENT_SERVICE = new InjectionToken<IHttpClient>('HttpClientService');
