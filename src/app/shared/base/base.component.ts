import { Directive, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { MessageService } from 'primeng/api'; 

@Directive()
export abstract class BaseComponent {
  constructor(
    protected messageService?: MessageService, 
    protected router?: Router,
    @Inject(PLATFORM_ID) protected platformId: Object = 'browser',
    protected themeService?: ThemeService
  ) {
    // Aplica o tema salvo no load
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

  protected navigateToWithParams(route: string, queryParams: NavigationExtras) {
    this.router?.navigate([route], queryParams);
  }

  showMessage(response: any, type: 'success' | 'error' | 'warn' | 'info' = 'info') {
    if (!this.messageService) return;

    let message = '';

    if (response?.notifications && Array.isArray(response.notifications)) {
      message = response.notifications.map((n: { key: string; message: string }) => n.message).join('\n');
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
