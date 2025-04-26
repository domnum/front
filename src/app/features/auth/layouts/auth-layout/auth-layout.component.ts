import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseComponent } from '../../../../shared/base/base.component';
import { ThemeToggleComponent } from "../../../../shared/components/theme-toggle/theme-toggle.component";

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, ThemeToggleComponent],
  template: `
    <div class="auth-layout-container">
      <div class="absolute top-4 right-4">
        <app-theme-toggle />
      </div>
      
      <div class="flex-1 flex items-center justify-center p-4">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }

    .auth-layout-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: var(--background-gradient);
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
    }
  `]
})
export class AuthLayoutComponent extends BaseComponent {} 