import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }

  firstName: string = "Jessica";
  lastName: string = "Minton";
  DOB = new FormControl(new Date());
  email: string = "jminton2017@fau.edu";
  username: string = "admin";
  password: string = "admin";
  languages: string = "C++, Java, Python";
  experience: string = "2 - 4 years";
  reason: string = "For Class";
  step = 0;
  title = 'Stack Underflow';
  

  ngOnInit() {}

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     window.location.href = 'https://renukaseepersad.github.io/Temp_stackUnderflow/index.html';
    }else {
      alert("Invalid credentials");
    }
  }

  submit() : void {
    
  }
}
