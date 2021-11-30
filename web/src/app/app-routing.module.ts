import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';

const routes: Routes = [
  { path: "", redirectTo: "federation", pathMatch: 'full' },
  {
    path: "federation",
    component: LayoutsComponent,
    loadChildren: () =>
      import("./federation/federation.module").then(
        (m) => m.FederationModule
      ),
    /* canActivate: [AuthGuard] */
  },
  {
    path: "club",
    component: LayoutsComponent,
    loadChildren: () =>
      import("./club/club.module").then(
        (m) => m.ClubModule
      ),
    /* canActivate: [AuthGuard] */
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
