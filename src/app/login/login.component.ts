import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email="";
  pass="";
 
  data : any;
  constructor(private http:HttpClient,private router:Router) { 
   
  }
  ngOnInit(): void {
    
  }
  login(){
    console.log('test login');
    // console.log(this.data);
    let json = { email:this.email,pass:this.pass };
    this.http.post('http://localhost:3000/login/log/',json).subscribe(response=>{
         console.log(response);
        let dataj = JSON.stringify(response);
        this.data = JSON.parse(dataj);
        
        this.router.navigateByUrl('/profile');
       
        sessionStorage.setItem("img",this.data.img);
        sessionStorage.setItem("email",this.data.email);
        sessionStorage.setItem("pass",this.data.pass);
        sessionStorage.setItem("name",this.data.name);
        sessionStorage.setItem("lname",this.data.lname);
        sessionStorage.setItem("tel",this.data.tel);
        sessionStorage.setItem("gender",this.data.gender);
         
        console.log(sessionStorage.getItem('email'));

        
          
    },error=>
    {
      console.log('Error'+this.email);
    
    });
  }
  
}
