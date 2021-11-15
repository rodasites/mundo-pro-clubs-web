import { DashboardComponent } from './dashboard/dashboard.component';
import { FederationModule } from './federation.module';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: 'full' },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FederationRoutingModule {}
