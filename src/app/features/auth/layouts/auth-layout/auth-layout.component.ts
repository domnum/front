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

      <div class="auth-scroll-wrapper overflow-y-auto flex justify-center p-4 pb-20 mb-12">
        <div class="auth-content w-full max-w-[500px]">
          <ng-content></ng-content>
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100vh;
      overflow: hidden;
    }

    .auth-layout-container {
      height: 100vh;
      display: flex;
      flex-direction: column;
      background: var(--background-gradient);
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
    }

    .auth-scroll-wrapper {
      flex: 1;
      overflow-y: auto;
      display: flex;
      justify-content: center;
      padding: 2rem 1rem;
    }

    .auth-content {
      width: 100%;
      max-width: 430px; 
    }
  `]
})
export class AuthLayoutComponent extends BaseComponent {}