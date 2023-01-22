import { AbstractControl, ValidatorFn } from '@angular/forms';

export function IsDateValidator(control: AbstractControl): ValidatorFn {
  return new Date(control.value).toString() !== 'Invalid Date' &&
    isNaN(new Date(control.value).getTime())
    ? { isDate: true }
    : (null as any);
}
