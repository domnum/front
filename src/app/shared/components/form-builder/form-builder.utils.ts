import { FormGroup, FormControl } from '@angular/forms';
import { FormField } from './form-builder.component';

export function getFormControl(form: FormGroup, name: string): FormControl {
  return form.get(name) as FormControl;
}

export function getErrorMessage(form: FormGroup, field: FormField): string {
  const control = form.get(field.name);
  if (!control || !field.errorMessages) return '';
  const errors = Object.keys(control.errors || {});
  return errors.length > 0 ? field.errorMessages[errors[0]] || '' : '';
}
