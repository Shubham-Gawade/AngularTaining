import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  emps : any = []
  constructor(private empService : EmpServiceService) { }

  ngOnInit(): void {
    this.emps = this.empService.getEmployee()
  }
}
