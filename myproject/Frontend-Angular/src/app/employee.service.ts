import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url ="http://localhost:3000/employee";

  employeesSalary = [
    {"designation":"Associate Software Engineer","salary":"4,50,000"},
    {"designation":"Software Software","salary":"6,00,000"},
    {"designation":"Tester","salary":"4,00,000"},
    {"designation":"Senior Software Engineer","salary":"10,00,000"},
    {"designation":"Project Manager","salary":"12,00,000"},
    {"designation":"Technical Lead","salary":"15,00,000"}
  ]  

  constructor(private http : HttpClient) { }

  getEmployees(){
    return this.http.get(this.url+"/getEmployees");
  }

  saveEmployee(employee: any){
    return this.http.post(this.url+"/saveEmployee",employee);
  }

  deleteEmployee(id: number){
    return this.http.delete(this.url+`/deleteEmployee/${id}`);
  }

  getEmployee(id: number){
    return this.http.get(this.url+`/getEmployee/${id}`);
  }

  editEmployee(employee: any){
    return this.http.put(this.url+"/editEmployee",employee);
  }

  getEmployeesSalary(){
    return this.employeesSalary;
  }
}
