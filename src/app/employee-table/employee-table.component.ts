import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MatSort, MatSortable, MatTableDataSource} from '@angular/material';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  dataSource;
  displayedColumns = ['name', 'username', 'email'];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployee().subscribe(results => {
      if(!results){
        
        return;
      }
      this.dataSource = new MatTableDataSource(results);
    })
  }

}
