import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  successAlert=false;
  signupForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.minLength(8)),
    checkBox: new FormControl(false, Validators.requiredTrue)
  })

  onSubmit(){
    console.log(this.signupForm.value);
    this.successAlert=true;
  }

}
