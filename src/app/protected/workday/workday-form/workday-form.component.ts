import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { IsDateValidator } from 'src/app/shared/validators/is-date.validator';

@Component({
  selector: 'al-workday-form',
  templateUrl: './workday-form.component.html',
  styles: [],
})
export class WorkdayFormComponent implements OnInit {
  workdayForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.workdayForm = this.createWorkdayForm();
  }

  get dueDate() {
    return this.workdayForm.get('dueDate') as FormControl;
  }
  get notes() {
    return this.workdayForm.get('notes') as FormControl;
  }
  get tasks() {
    return this.workdayForm.get('tasks') as FormArray;
  }

  createWorkdayForm(): FormGroup {
    const workdayForm: FormGroup = this.fb.group({
      dueDate: ['', [Validators.required, IsDateValidator]],
      tasks: this.fb.array([], [Validators.required, Validators.maxLength(6)]),
      notes: '',
    });

    return workdayForm;
  }

  submit(): void {
    console.info(this.workdayForm.value);
  }
}
