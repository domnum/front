// activate-account.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ProgressBarModule } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css'],
  standalone: true,
  imports: [CommonModule, ProgressBarModule, ButtonModule],
})
export class ActivateAccountComponent implements OnInit {
  loading = true;
  success: boolean | null = null;
  errorMessage: string | null = null;
  email: string | null = null;
  token: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.email = this.route.snapshot.queryParamMap.get('email');
    this.token = this.route.snapshot.queryParamMap.get('token');
    this.tryActivate();
  }

  async tryActivate(): Promise<void> {
    if (this.email && this.token) {
      this.loading = true;
      this.errorMessage = null;
  
      const start = Date.now();
  
      this.authService.activateAccount(this.email, this.token).subscribe({
        next: () => {
          const elapsed = Date.now() - start;
          const remaining = 1500 - elapsed;
  
          setTimeout(() => {
            this.success = true;
            this.loading = false;
          }, Math.max(remaining, 0));
        },
        error: (error) => {
          const elapsed = Date.now() - start;
          const remaining = 1500 - elapsed;
  
          setTimeout(() => {
            this.success = false;
            this.errorMessage =
              error?.error?.message || 'Falha ao ativar sua conta. Verifique o link ou tente novamente.';
            this.loading = false;
          }, Math.max(remaining, 0));
        }
      });
    } else {
      this.success = false;
      this.loading = false;
      this.errorMessage = 'Link inválido. Parâmetros ausentes.';
    }
  }

  navigateToLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}
