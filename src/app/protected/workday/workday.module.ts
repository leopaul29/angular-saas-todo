import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkdayComponent } from './workday/workday.component';
import { WorkdayRoutingModule } from './workday-routing.module';
import { WorkdayFormComponent } from './workday-form/workday-form.component';

@NgModule({
  declarations: [WorkdayComponent, WorkdayFormComponent],
  imports: [SharedModule, WorkdayRoutingModule],
})
export class WorkdayModule {}
