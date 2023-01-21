import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametersComponent } from './parameters/parameters/parameters.component';
import { PlanningComponent } from './planning/planning/planning.component';
import { ProfilComponent } from './profil/profil/profil.component';
import { ProtectedComponent } from './protected.component';
import { WorkdayComponent } from './workday/workday/workday.component';

const routes: Routes = [
  {
    path: 'app',
    component: ProtectedComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      { path: 'parameters', component: ParametersComponent },
      { path: 'planning', component: PlanningComponent },
      { path: 'profil', component: ProfilComponent },
      { path: 'workday', component: WorkdayComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedRoutingModule {}
