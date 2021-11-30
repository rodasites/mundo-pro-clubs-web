import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FederationRoutingModule } from './federation-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompetitionListComponent } from './competition-list/competition-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { CompetitionFormComponent } from './competition-form/competition-form.component';
import { CompetitionReportComponent } from './competition-report/competition-report.component';



@NgModule({
  declarations: [ DashboardComponent, CompetitionListComponent, CompetitionFormComponent, CompetitionReportComponent],
  imports: [
    CommonModule,
    FederationRoutingModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatIconModule
  ]
})
export class FederationModule { }
