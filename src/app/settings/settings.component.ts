import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private loginComponent: LoginComponent) { }

  ngOnInit(): void {
  }
  hidePass = true;
  hidden: boolean = true;
  firstName = this.loginComponent.firstName;
  lastName = this.loginComponent.lastName;
  DOB = this.loginComponent.DOB;
  email = this.loginComponent.email;
  username = this.loginComponent.username;
  password = this.loginComponent.password;
  languages = this.loginComponent.languages;
  experience = this.loginComponent.experience;
  reason = this.loginComponent.reason;

  editSurvey(c: string, cShrp: string, cpp: string, py: string, java: string, 
    zero: string, zeroToTwo: string, twoToFour: string, fourPlus: string, forClass: string, work: string, other: string) {
    if(this.hidden === false) {
      console.log(c);
      this.hidden = true;
    } else
      this.hidden = false;
  }


  edit(first: string, last: string, user: string, pass: string, picker: Date, mail: string) {
    if (this.hidden === false) {
      this.firstName = first;
      this.lastName = last;
      this.username = user;
      this.password = pass;
      this.email = mail;
      this.hidePass = true;
      this.hidden = true;
    } else {
      this.hidePass = false;
      this.hidden = false;
    }
  }

}
