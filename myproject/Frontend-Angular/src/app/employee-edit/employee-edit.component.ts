import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employee: any = [];
  id : any;
  salaries : any;
  selectedDesignation : string = "";
  selectedSalary : string = "";

  editEmployeeForm : FormGroup =new FormGroup({
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
    return this.editEmployeeForm.controls
  }

  constructor(private router : Router,private route: ActivatedRoute,private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.salaries = this.employeeService.getEmployeesSalary();
 
    this.editEmployeeForm.controls['salary'].disable()
    this.editEmployeeForm.controls['email'].disable()

    this.employeeService.getEmployee(this.id).subscribe(
      (response: any) => {
        this.employee= response.employee
        this.setValues(this.employee)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onChange(event : any) {
    this.selectedDesignation=event;
    this.salaries.forEach((element : any) => {
      if(this.selectedDesignation == element["designation"]){
        this.selectedSalary = element["salary"]
      }
    });
    this.editEmployeeForm.controls['salary'].setValue(this.selectedSalary);
  }

  setValues(employee : any){
    this.editEmployeeForm.controls['firstname'].setValue(employee.firstname);
    this.editEmployeeForm.controls['lastname'].setValue(employee.lastname);
    this.editEmployeeForm.controls['photo'].setValue(employee.photo);
    this.editEmployeeForm.controls['address'].setValue(employee.address);
    this.editEmployeeForm.controls['location'].setValue(employee.location);
    this.editEmployeeForm.controls['gender'].setValue(employee.gender);
    this.editEmployeeForm.controls['age'].setValue(employee.age);
    this.editEmployeeForm.controls['phoneno'].setValue(employee.phoneno);
    this.editEmployeeForm.controls['designation'].setValue(employee.designation);
    this.editEmployeeForm.controls['email'].setValue(employee.email);
    this.editEmployeeForm.controls['salary'].setValue(employee.salary);
    this.editEmployeeForm.controls['joiningdate'].setValue(employee.joiningdate);
    this.editEmployeeForm.controls['dateofbirth'].setValue(employee.dateofbirth);
  }

  editForm(){
    const data = {
      _id : this.id,
      firstname: this.editEmployeeForm.get('firstname')?.value,
      lastname : this.editEmployeeForm.get('lastname')?.value,
      photo : this.editEmployeeForm.get('photo')?.value,
      address : this.editEmployeeForm.get('address')?.value,
      location : this.editEmployeeForm.get('location')?.value,
      gender : this.editEmployeeForm.get('gender')?.value,
      age : this.editEmployeeForm.get('age')?.value,
      phoneno : this.editEmployeeForm.get('phoneno')?.value,
      designation : this.editEmployeeForm.get('designation')?.value,
      email : this.editEmployeeForm.get('email')?.value,
      salary : this.editEmployeeForm.get('salary')?.value,
      joiningdate : this.editEmployeeForm.get('joiningdate')?.value,
      dateofbirth : this.editEmployeeForm.get('dateofbirth')?.value
    };

    if(confirm("Are you sure you want to update?")){
      this.employeeService.editEmployee(data).subscribe(
        (response: any) => {
          alert(response.message)
          this.router.navigate(['/employee-list'])
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  cancelForm(){
    this.router.navigate(['employee-details/',this.id])
  }
}
