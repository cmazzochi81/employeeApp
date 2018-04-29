import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MatSort, MatSortable, MatTableDataSource} from '@angular/material';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayedColumns = ['photo', 'name', 'position'];

  constructor() {}
  ngOnInit() {   
    this.dataSource = new MatTableDataSource([
            {
              "id": 1,
              "name": "Leanne Grahamz",
              "username": "Bret",
              "position": "Software Developer"
            },
            {
              "id": 2,
              "name": "Ervin Howell",
              "username": "Antonette",
              "position": "Graphic Designer"
            },
            {
              "id": 3,
              "name": "Clementine Bauch",
              "username": "Samantha",
              "position": "Front End Developer"
            },
            {
              "id": 4,
              "name": "Patricia Lebsack",
              "username": "Karianne",
              "position": "Full Stack Developer"
            },
            {
              "id": 5,
              "name": "Chelsey Dietrich",
              "username": "Kamren",
              "position": "Database Administrator" 
            }
    ]); //End data object
  }//End ng onInit

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  toggle() {
    console.log("The hide table button was clicked.");

    var button = <HTMLElement>document.querySelector('#table-button');

    var table  = <HTMLElement>document.querySelector('.mat-table');

          if (table.style.display == "block") {
              table.style.display = "none";
              button.innerHTML = "Show Table";
          } else {
              table.style.display = "block";
              button.innerHTML = "Hide Table";
          }
  }
}//End class EmployeeTableComponent
