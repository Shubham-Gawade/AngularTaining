import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  employees : any = [];
  page : number = 1;
  searchedKeyword: string = "";

  constructor(private employeeService : EmployeeService, private route : Router) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      (response: any) => {
        this.employees = response.employees;
        console.log(this.employees)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goToDetails(id : number){
    this.route.navigate(['/employee-details/',id]);
  }
}
