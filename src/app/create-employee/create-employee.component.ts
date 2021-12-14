import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit { 

  employee: Employee = new Employee();

  constructor(private http:HttpClient, private emplyeeService: EmployeeService, 
    private router: Router) { }

  ngOnInit(): void {
  }

     
  onSubmit(data){

    this.http.post('http://localhost:8080/api/v1/employees', data).subscribe((result)=>{
      console.warn("result",result)
    })
      console.warn(data);
      
      this.router.navigate(['/employees']);
     
  }

}
