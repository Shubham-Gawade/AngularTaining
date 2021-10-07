import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  //Received controls from html
  loginForm : FormGroup =new FormGroup({
    uname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    pword : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),
    confpword : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15)])
  });

  //Angular Calls this method Implicitly
  //To give controls back to html
  get aForm(){
    return this.loginForm.controls
  }

  constructor() { }

  ngOnInit(): void {
  }

}
