import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username : String = ""
  password : String = ""
  isEmpty : boolean = true

  submit(){
    if(this.username != "" && this.password !=""){
      this.isEmpty = false
    }else{
      this.isEmpty = true
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
