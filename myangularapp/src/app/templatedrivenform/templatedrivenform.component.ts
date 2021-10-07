import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registerUser(frm : any){
    alert(frm.form.value.uname)
  }
}
