import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  recaptcha: any[] = [];
  resolved(captchaResponse: any[]){
    console.log(this.recaptcha);
  }



  constructor() {
  }

  ngOnInit(): void {
  }

}
