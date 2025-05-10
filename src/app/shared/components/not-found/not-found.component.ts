import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AuthLayoutComponent } from "../../../features/auth/layouts/auth-layout/auth-layout.component";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule,ButtonModule, AuthLayoutComponent],
  template: `
    <app-auth-layout>
      <ng-container *ngIf="true">
        <div class="flex flex-col items-center justify-center h-full min-h-0 bg-transparent" style="color: var(--p-primary-400); min-height: 0;">
          <h1 class="text-6xl font-bold mb-4">404</h1>
          <p class="text-xl mb-8">Página não encontrada</p>
          <p-button label="Voltar para Home" variant="outlined" [routerLink]="['/']" 
           [raised]="true" severity="info" />
        </div>
      </ng-container>
    </app-auth-layout>
  `,
})
export class NotFoundComponent {}