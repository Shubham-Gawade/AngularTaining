import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  employees = [
    {"id":101, "name":"john", "designation":"Developer"},
    {"id":102, "name":"smith", "designation":"Manager"},
    {"id":103, "name":"jane", "designation":"Tester"},
    {"id":104, "name":"jack", "designation":"HR"},
    {"id":105, "name":"Rose", "designation":"Sr.Developer"}
  ]
  constructor() { }

  getEmployee(){
    return this.employees;
  }
}
