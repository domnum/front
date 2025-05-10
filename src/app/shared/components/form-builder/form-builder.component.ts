import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { provideNgxMask } from 'ngx-mask';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { RouterModule } from '@angular/router';
import { InputComponent } from '../input/input.component';
import { FormBuilderRouterLink } from './form-builder.types';
import { getFormControl, getErrorMessage } from './form-builder.utils';

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
    InputComponent,
    CardModule,
    ButtonModule,
    PasswordModule,
    RouterModule
  ],
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
  providers: [provideNgxMask()]
})
export class FormBuilderComponent implements OnInit {
  @Input() title: string = '';
  @Input() fields: FormField[] = [];
  @Input() form!: FormGroup;
  @Input() submitButtonLabel: string = 'Enviar';
  @Input() routersLinks: FormBuilderRouterLink[] = [];

  @Output() formSubmit = new EventEmitter<any>();

  isLoading: boolean = false;

  ngOnInit() {}

  onSubmit() {
    if (this.form.valid) {
      this.isLoading = true;
      this.formSubmit.emit(this.form.value);

      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    }
  }

  getFormControl(name: string): FormControl {
    return getFormControl(this.form, name);
  }

  getErrorMessage(field: FormField): string {
    return getErrorMessage(this.form, field);
  }
}
