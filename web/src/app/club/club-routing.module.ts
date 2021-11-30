import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompetitionListComponent } from "../federation/competition-list/competition-list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubRoutingModule {}
