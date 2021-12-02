import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Competition } from 'src/app/domain/competition/competition.module';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.scss']
})
export class CompetitionListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'status', 'actions'];
  dataSource: MatTableDataSource<Competition>;
  public competition: Competition[] = [
    {
      id: 1,
      name: 'Campeonato 1',
      dateStart: new Date(),
      isPublic: true,
      status: 'EM ANDAMENTO'
    },
    {
      id: 2,
      name: 'Campeonato 2',
      dateStart: new Date(),
      isPublic: true,
      status: 'Finalizado'
    },
    {
      id: 3,
      name: 'Campeonato 3',
      dateStart: new Date(),
      isPublic: true,
      status: 'Cancelado'
    },
    {
      id: 4,
      name: 'Campeonato 4',
      dateStart: new Date(),
      isPublic: false,
      status: 'Não iniciado'
    },
  ]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    
    this.dataSource = new MatTableDataSource(this.competition);
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}



/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];