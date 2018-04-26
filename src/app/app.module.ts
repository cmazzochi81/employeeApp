import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule, MatSortModule} from '@angular/material';
import {AppComponent} from './app.component';
import {EmployeeTableComponent} from './employee-table/employee-table.component';
import {EmployeeService} from './employee.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent 
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule, 
    MatSortModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
