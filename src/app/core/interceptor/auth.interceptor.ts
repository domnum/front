import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../../client/token.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let clonedRequest = req;

    const isPublicRoute =
      req.url.includes('/auth/login') ||
      req.url.includes('/auth/register') ||
      req.url.includes('/public') ||
      req.url.includes('/landing');

    if (isPublicRoute) {
      clonedRequest = req.clone({
        setHeaders: {
          'X-API-KEY': environment.API_KEY,
        },
      });
    } else {
      const token = this.tokenService.getToken();
      if (token) {
        clonedRequest = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    }

    return next.handle(clonedRequest);
  }
}
