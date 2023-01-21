import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
      {
        path: 'parameters',
        loadChildren: () =>
          import('./parameters/parameters.module').then(
            (m) => m.ParametersModule
          ),
      },
      {
        path: 'planning',
        loadChildren: () =>
          import('./planning/planning.module').then((m) => m.PlanningModule),
      },
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
