import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, InputTextModule, ReactiveFormsModule, NgxMaskDirective],
  template: `
    <div class="custom-input-wrapper">
      <label *ngIf="label" class="input-label">{{ label }}</label>

      <input
        pInputText
        class="custom-input"
        [formControl]="control"
        [type]="type"
        [placeholder]="placeholder"
        [mask]="mask"
        [ngClass]="{ 'invalid': control.invalid && (control.dirty || control.touched) }"
      />

      <div *ngIf="control.invalid && (control.dirty || control.touched)" class="error-messages">
        <ng-container *ngFor="let errorKey of errorKeys()">
          <small class="error-text">{{ errorMessages?.[errorKey] }}</small>
        </ng-container>
      </div>
    </div>
  `,
  styles: [`
    .custom-input-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 0.5rem;
    }

    .input-label {
      color: #fff;
      font-size: 0.875rem;
      font-weight: 500;
    }

    :host ::ng-deep {
      .p-inputtext {
        width: 100% !important;
        background: rgba(255, 255, 255, 0.1) !important;
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
        color: white !important;
        padding: 0.8rem !important;
        border-radius: 4px !important;

        &::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        &:enabled:focus {
          box-shadow: none !important;
          border-color: #3498db !important;
        }

        &.invalid {
          border-color: #ff6b6b !important;
        }
      }
    }

    .error-text {
      color: #ff6b6b;
      font-size: 0.75rem;
    }

    .error-messages {
      margin-top: 0.25rem;
    }
  `]
})
export class InputComponent {
  @Input() control!: FormControl;
  @Input() label?: string;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() mask?: string;
  @Input() errorMessages?: { [key: string]: string };

  errorKeys(): string[] {
    return this.control.errors ? Object.keys(this.control.errors) : [];
  }
}
