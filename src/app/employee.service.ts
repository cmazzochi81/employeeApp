import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from './models/employee.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EmployeeService {

  private serviceUrl = "https://jsonplaceholder.typicode.com/users";

 

  constructor(private http: HttpClient) { }

  	getEmployee():Observable<Employee[]>{
  		return this.http.get<Employee[]>(this.serviceUrl);
  	}
}
