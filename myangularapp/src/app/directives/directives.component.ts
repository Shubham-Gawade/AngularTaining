import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  flag : Boolean = false
  message : String = "This is message from component"

  months = ["jan","feb","mar","apr"]

  numbers = [12,34,13,67,43,90,89,23,85,15]

  color = 'yellow';

  country = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
