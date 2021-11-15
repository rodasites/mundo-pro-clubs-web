import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';

const routes: Routes = [

  {
    path: "federation",
    component: LayoutsComponent,
    loadChildren: () =>
      import("./federation/federation.module").then(
        (m) => m.FederationModule
      ),
    /* canActivate: [AuthGuard] */
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
