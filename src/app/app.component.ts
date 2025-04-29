import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSnackBarModule,
    MatIconModule,
    ToastModule 
  ],
  template: `
    <p-toast
      position="top-center"
      [showTransformOptions]="'translateX(100%)'"
      [hideTransformOptions]="'translateX(100%)'"
      [showTransitionOptions]="'1000ms'"
      [hideTransitionOptions]="'1000ms'">
    </p-toast>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
