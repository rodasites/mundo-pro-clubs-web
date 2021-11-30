import { DashboardComponent } from './dashboard/dashboard.component';
import { FederationModule } from './federation.module';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompetitionListComponent } from './competition-list/competition-list.component';
import { CompetitionFormComponent } from './competition-form/competition-form.component';
import { CompetitionReportComponent } from './competition-report/competition-report.component';

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: 'full' },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "competitions",
    component: CompetitionListComponent,
  },
  {
    path: "competition",
    component: CompetitionFormComponent,
  },
  {
    path: "competition/:id",
    component: CompetitionFormComponent,
  },
  {
    path: "report/:id",
    component: CompetitionReportComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FederationRoutingModule {}
