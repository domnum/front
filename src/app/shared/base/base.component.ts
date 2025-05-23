import { Directive, inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { MessageService } from 'primeng/api'; 
import { mapNotificationsToMessage } from './base.utils';

@Directive()
export abstract class BaseComponent {
  protected messageService = inject(MessageService);
  protected router = inject(Router);
  protected platformId = inject(PLATFORM_ID);
  protected themeService = inject(ThemeService);

  constructor() {
    this.themeService?.applyInitialTheme();
  }

  public get isDarkTheme(): boolean {
    return this.themeService?.isDarkMode() ?? false;
  }

  public toggleTheme(): boolean {
    return this.themeService?.toggleTheme() ?? false;
  }

  protected navigateTo(route: string) {
    this.router?.navigate([route]);
  }

  protected navigateToWithParams(route: string, queryParams: any) {
    this.router?.navigate([route], queryParams);
  }

  showMessage(response: any, type: 'success' | 'error' | 'warn' | 'info' = 'info') {
    if (!this.messageService) return;

    let message = '';

    if (response?.notifications && Array.isArray(response.notifications)) {
      message = mapNotificationsToMessage(response.notifications);
    } else if (typeof response === 'string') {
      message = response;
    } else {
      message = response?.message ?? 'Ocorreu um erro inesperado.';
    }

    this.messageService.add({
      severity: type,
      summary: this.getSummaryByType(type),
      detail: message,
      life: 3000, 
      styleClass: 'custom-toast-animation' 
    });
  }

  private getSummaryByType(type: 'success' | 'error' | 'warn' | 'info'): string {
    switch (type) {
      case 'success':
        return 'Sucesso';
      case 'error':
        return 'Erro';
      case 'warn':
        return 'Atenção';
      case 'info':
      default:
        return 'Informação';
    }
  }
}
