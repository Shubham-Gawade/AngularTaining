import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  msgToChildComp : string = "Message send to Child Comp";

  arrayInParent : any = [1,2,3,4,5];

  constructor() { }

  ngOnInit(): void {
  }

}
