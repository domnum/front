import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputComponent } from '../input/input.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PasswordModule } from 'primeng/password';

export interface FormField {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  mask?: string;
  validators?: ValidatorFn[];
  errorMessages?: { [key: string]: string };
  inputConfig?: {
    showToggleMask?: boolean;
    feedback?: boolean;
    placeholder?: string;
  };
}

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    InputComponent,
    CardModule,
    ButtonModule,
    PasswordModule
  ],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="form-container">
      <ng-container *ngFor="let field of fields">
        <div class="field-container">
          <ng-container [ngSwitch]="field.type">
            <!-- Input de senha com toggle -->
            <div *ngSwitchCase="'password'" class="password-wrapper">
              <label [for]="field.name" class="field-label">{{ field.label }}</label>
              <p-password 
                [id]="field.name"
                [formControlName]="field.name"
                [toggleMask]="field.inputConfig?.showToggleMask ?? true"
                [feedback]="field.inputConfig?.feedback ?? false"
                [placeholder]="field.inputConfig?.placeholder ?? ''"
                [inputStyle]="{ width: '100%' }"
                styleClass="w-full">
              </p-password>
              <small class="error-message" *ngIf="form.get(field.name)?.invalid && form.get(field.name)?.touched">
                {{ getErrorMessage(field) }}
              </small>
            </div>

            <!-- Input customizado -->
            <app-input
              *ngSwitchDefault
              [control]="getFormControl(field.name)"
              [label]="field.label"
              [type]="field.type || 'text'"
              [mask]="field.mask"
              [placeholder]="field.inputConfig?.placeholder ?? ''"
              [errorMessages]="field.errorMessages">
            </app-input>
          </ng-container>
        </div>
      </ng-container>

      <div class="button-container">
        <button pButton type="submit" [disabled]="form.invalid" label="{{ submitButtonLabel }}"></button>
      </div>
    </form>
  `,
  styles: [`
    .form-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
    }

    .field-container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .field-label {
      color: #fff;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .error-message {
      color: #ff6b6b;
      font-size: 0.75rem;
    }

    .password-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;
    }

    :host ::ng-deep {
      .p-password {
        width: 100%;
        
        input {
          width: 100% !important;
          background: rgba(255, 255, 255, 0.1) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          color: white !important;
          padding: 0.8rem !important;
          border-radius: 4px !important;
          padding-right: 2.5rem !important;

          &::placeholder {
            color: rgba(255, 255, 255, 0.6);
          }

          &:enabled:focus {
            box-shadow: none !important;
            border-color: #3498db !important;
          }
        }
      }

      .p-password-panel {
        background: #1e2a3a;
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }

      .p-password-meter {
        background: rgba(255, 255, 255, 0.1);
      }

      .p-icon {
        color: rgba(255, 255, 255, 0.6);
        width: 1.2rem;
        height: 1.2rem;
      }
    }

    .button-container {
      margin-top: 1rem;
      width: 100%;
    }

    button {
      width: 100%;
    }
  `],
  providers: [provideNgxMask()]
})
export class FormBuilderComponent implements OnInit {
  @Input() fields: FormField[] = [];
  @Input() form!: FormGroup;
  @Input() submitButtonLabel: string = 'Enviar';

  @Output() formSubmit = new EventEmitter<any>();

  ngOnInit() {}

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }

  getFormControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

  getErrorMessage(field: FormField): string {
    const control = this.form.get(field.name);
    if (!control || !field.errorMessages) return '';

    const errors = Object.keys(control.errors || {});
    return errors.length > 0 ? field.errorMessages[errors[0]] || '' : '';
  }
}
