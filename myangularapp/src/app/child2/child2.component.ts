import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  msgToParent : string ="This is msg for parent"
  
  @Output() childEvent = new EventEmitter()

  childEventHandler(){
    this.childEvent.emit(this.msgToParent)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
