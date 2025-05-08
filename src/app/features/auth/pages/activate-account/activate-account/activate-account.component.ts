import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../../shared/base/base.component';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css'],
  standalone: true,
  imports: []
})
export class ActivateAccountComponent extends BaseComponent implements OnInit {
  loading = true;
  success: boolean | null = null;
  errorMessage: string | null = null;
  email: string | null = null;
  token: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    super();
  }

  ngOnInit(): void {
    this.email = this.route.snapshot.queryParamMap.get('email');
    this.token = this.route.snapshot.queryParamMap.get('token');
    this.tryActivate();
  }

  async tryActivate(): Promise<void> {
    if (this.email && this.token) {
      this.loading = true;
      this.errorMessage = null;
      try {
        await this.authService.activateAccount(this.email, this.token);
        this.success = true;
      } catch (error: any) {
        this.success = false;
        this.errorMessage = error?.error?.message || 
          'Falha ao ativar sua conta. Verifique o link ou tente novamente.';
      } finally {
        this.loading = false;
      }
    } else {
      this.success = false;
      this.loading = false;
      this.errorMessage = 'Link inválido. Parâmetros ausentes.';
    }
  }
}