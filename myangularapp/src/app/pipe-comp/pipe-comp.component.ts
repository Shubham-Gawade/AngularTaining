import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-comp',
  templateUrl: './pipe-comp.component.html',
  styleUrls: ['./pipe-comp.component.css']
})
export class PipeCompComponent implements OnInit {

  title = "Angular Application";

  today = new Date();

  jsonval = {name:'Rox', age:'25',
              address:{a1:'Mumbai', a2:'Karnataka'}};
              
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
            "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  numbers = [1,2,3,4,5,6,7,8,9,10]

  constructor() { }

  ngOnInit(): void {
  }

}
