import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  msgFromChild : string = "";

  receiveMsg($event : any){
    this.msgFromChild = $event
  }
  constructor() { }

  ngOnInit(): void {
  }

}
