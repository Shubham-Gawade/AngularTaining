import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  date : any = new Date();
  salaries : any;
  selectedDesignation : string = "";
  selectedSalary : string = "";
  selectedDate : Date = new Date();  
  
  addEmployeeForm : FormGroup =new FormGroup({
    firstname : new FormControl('',[Validators.required]),
    lastname : new FormControl('',[Validators.required]),
    photo : new FormControl('',[Validators.required]),
    address : new FormControl('',[Validators.required]),
    location : new FormControl('',[Validators.required]),
    gender : new FormControl('',[Validators.required]),
    age : new FormControl('',[Validators.required]),
    phoneno : new FormControl('',[Validators.required]),
    designation : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    salary : new FormControl('',[Validators.required]),
    joiningdate : new FormControl('',[Validators.required]),
    dateofbirth : new FormControl('',[Validators.required]),
  });

  get addForm(){
    return this.addEmployeeForm.controls
  }

  constructor(private employeeService : EmployeeService, private router : Router,public datepipe: DatePipe) { }

  ngOnInit(): void {
    let todays_date =this.datepipe.transform(this.date, 'yyyy-MM-dd'); 
    this.addEmployeeForm.controls['joiningdate'].setValue(todays_date);
    
    this.addEmployeeForm.controls['salary'].disable()

    this.salaries = this.employeeService.getEmployeesSalary();
  }

  onChange(event : any) {
    this.selectedDesignation=event;
    this.salaries.forEach((element : any) => {
      if(this.selectedDesignation == element["designation"]){
        this.selectedSalary = element["salary"]
      }
    });
    this.addEmployeeForm.controls['salary'].setValue(this.selectedSalary);
  }

  submitForm(){
    const data = {
      firstname: this.addEmployeeForm.get('firstname')?.value,
      lastname : this.addEmployeeForm.get('lastname')?.value,
      photo : this.addEmployeeForm.get('photo')?.value,
      address : this.addEmployeeForm.get('address')?.value,
      location : this.addEmployeeForm.get('location')?.value,
      gender : this.addEmployeeForm.get('gender')?.value,
      age : this.addEmployeeForm.get('age')?.value,
      phoneno : this.addEmployeeForm.get('phoneno')?.value,
      designation : this.addEmployeeForm.get('designation')?.value,
      email : this.addEmployeeForm.get('email')?.value,
      salary : this.addEmployeeForm.get('salary')?.value,
      joiningdate : this.addEmployeeForm.get('joiningdate')?.value,
      dateofbirth : this.addEmployeeForm.get('dateofbirth')?.value
    };

    this.employeeService.saveEmployee(data).subscribe(
      (response: any) => {
        alert(response.message)
        this.router.navigate(['/employee-list'])
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancelForm(){
    this.router.navigate(['/employee-list']);
  }
}