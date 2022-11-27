import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }
  successAlert=false;
  loginForm = new FormGroup({

    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.minLength(8)),

  })

  onSubmit(){
    this.successAlert=true;
  }

}
