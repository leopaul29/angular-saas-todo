import { AbstractControl, ValidatorFn } from '@angular/forms';

export function IsDateValidator(control: AbstractControl): ValidatorFn {
  console.log('control.value', control.value);
  console.log(
    "new Date(control.value).toString() !== 'Invalid Date'",
    new Date(control.value).toString() !== 'Invalid Date'
  );
  console.log(
    'isNaN(new Date(control.value).getTime())',
    isNaN(new Date(control.value).getTime())
  );
  console.log(
    'condition date',
    new Date(control.value).toString() !== 'Invalid Date' &&
      !isNaN(new Date(control.value).getTime())
  );
  const a =
    new Date(control.value).toString() !== 'Invalid Date' &&
    isNaN(new Date(control.value).getTime())
      ? { isDate: true }
      : (null as any);
  console.log('isDate', a);

  return a;
}
