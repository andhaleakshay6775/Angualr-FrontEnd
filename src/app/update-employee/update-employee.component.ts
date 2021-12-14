import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
 
   id:number;
   employee:Employee=new Employee();
  constructor(private employeeservice:EmployeeService,private http:HttpClient,private route:Router ,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
  this.employeeservice.getEmployeebyId(this.id).subscribe(data =>{
    this.employee=data;
  }, error=>console.error(error));

  }
  
  onSubmit(){

    this.employeeservice.updateEmployee(this.id, this.employee).subscribe(data =>{
      this.goToEmployeeList();
    }, error =>console.error(error));
  }
   goToEmployeeList(){
     this.route.navigate(['/employees']);
   }      
  

}
