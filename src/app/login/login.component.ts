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

  username: string;
  password: string;
  step = 0;
  

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
     this.router.navigate(["home"]);
    }else {
      alert("Invalid credentials");
    }
  }

  submit() : void {
    
  }
}
