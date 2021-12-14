import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseurl = "http://localhost:8080/api/v1/employees";
  constructor(private httpClient: HttpClient) { }

  getEmpList(): Observable<Employee[]>{
    

    return this.httpClient.get<Employee[]>(`${this.baseurl}`);

  }

  createEmployee(employee: Employee): Observable<any>{
    return this.httpClient.post(`${this.baseurl}`, employee);
  }

  getEmployeebyId(id:number): Observable<Employee>{
    

    return this.httpClient.get<Employee>(`${this.baseurl}/${id}`);

  }

  updateEmployee(id:number, employee:Employee):Observable<object>{
    return this.httpClient.put(`${this.baseurl}/${id}`,employee);
  }

  deleteEmployee(id:number): Observable<object>{
    return this.httpClient.delete(`${this.baseurl}/${id}`);
  }

  }

