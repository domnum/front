import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ActivateAccountParams, ActivateAccountState } from './activate-account.model';
import { getActivateAccountParams } from './activate-account.utils';
import { ActivateAccountFacade } from './activate-account.facade';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css'],
  standalone: true,
  imports: [CommonModule, ProgressBarModule, ButtonModule],
})
export class ActivateAccountComponent implements OnInit {
  state: ActivateAccountState = {
    loading: true,
    success: null,
    errorMessage: null,
  };
  params: ActivateAccountParams | null = null;

  constructor(
    private route: ActivatedRoute,
    private facade: ActivateAccountFacade,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.params = getActivateAccountParams(this.route);
    this.tryActivate();
  }

  async tryActivate(): Promise<void> {
    if (this.params) {
      this.state.loading = true;
      this.state.errorMessage = null;
      const start = Date.now();
      this.facade.activate(this.params).subscribe({
        next: () => {
          const elapsed = Date.now() - start;
          const remaining = 1500 - elapsed;
          setTimeout(() => {
            this.state.success = true;
            this.state.loading = false;
          }, Math.max(remaining, 0));
        },
        error: (error) => {
          const elapsed = Date.now() - start;
          const remaining = 1500 - elapsed;
          setTimeout(() => {
            this.state.success = false;
            this.state.errorMessage =
              error?.error?.message || 'Falha ao ativar sua conta. Verifique o link ou tente novamente.';
            this.state.loading = false;
          }, Math.max(remaining, 0));
        }
      });
    } else {
      this.state.success = false;
      this.state.loading = false;
      this.state.errorMessage = 'Link inválido. Parâmetros ausentes.';
    }
  }

  navigateToLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}
