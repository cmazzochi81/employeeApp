import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
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
    MatSortModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
