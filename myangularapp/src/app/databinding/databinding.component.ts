import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  username : String = "Shubham"
  isDisabled : Boolean = true
  imgURL : String = "./assets/images/nature.jpg"

  firstname : String = ""  
  
  displayMsg(){
    alert("Hello World")
  }

  greet(){
    alert("Hello")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
