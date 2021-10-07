import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: any = [];
  id : any 

  constructor(private router : Router,private route: ActivatedRoute,private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(this.id).subscribe(
      (response: any) => {
        this.employee= response.employee
      },
      (error) => {
        console.log(error);
      }
    );

  }

  deleteEmployee(){
    if(confirm("Are you sure you want to delete?")){
      this.employeeService.deleteEmployee(this.id).subscribe(
        (response: any) => {
          alert(response.message)
          this.router.navigate(['/employee-list']);
        },
        (error) => {
          console.log(error);
        }
        );
    }
  }

  editEmployee(){
    this.router.navigate(['/employee-edit/',this.id]);
  }

}
