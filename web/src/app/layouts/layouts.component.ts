import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

  showSidenav(){
    this.sidenav.toggle()
  }

}
