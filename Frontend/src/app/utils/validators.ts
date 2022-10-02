import {AbstractControl, ValidationErrors} from '@angular/forms';

export const customValidatorRequired = (control: AbstractControl): ValidationErrors | null => {
    return !control.value ||
      (typeof control.value === 'number' && control.value < 0) ||
      (typeof control.value === 'string' && control.value.trim() === '') ||
      control.value.length === 0
      ? {required: true}
      : null;
  };