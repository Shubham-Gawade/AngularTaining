import { Component, OnInit } from '@angular/core';
import { EmphttpService } from '../emphttp.service';

@Component({
  selector: 'app-emphttpcomp',
  templateUrl: './emphttpcomp.component.html',
  styleUrls: ['./emphttpcomp.component.css']
})
export class EmphttpcompComponent implements OnInit {

  employees : any = []

  constructor(private emphttpservice : EmphttpService) { }

  ngOnInit(): void {
    this.emphttpservice.getEmployees().subscribe(
      (response: any) => {
        this.employees = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
