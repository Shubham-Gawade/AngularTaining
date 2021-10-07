import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './IEmployee';
import { IEmployeeAPI } from './IEmployeeAPI';

@Injectable({
  providedIn: 'root'
})
export class EmphttpService {

  private url : string =  "https://reqres.in/api/products";
  //private url : string = "./assets/employees.json"
  
  constructor(private http : HttpClient) { }

  // getEmployees() : Observable<IEmployee[]>{
  //   return this.http.get<IEmployee[]>(this.url);
  // }

  getEmployees() : Observable<IEmployeeAPI[]>{
    return this.http.get<IEmployeeAPI[]>(this.url);
  }
}
