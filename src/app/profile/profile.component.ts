import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  src:any;
  constructor(private http:HttpClient,private router:Router,private sanitizer: DomSanitizer) { }
        pro_img:any = sessionStorage.getItem('img');
        pro_email:any = sessionStorage.getItem('email');
        pro_pass:any = sessionStorage.getItem('pass');
        pro_name:any = sessionStorage.getItem('name');
        pro_lname:any = sessionStorage.getItem('laname');
        pro_tel:any = sessionStorage.getItem('tel');
        pro_gender:any = sessionStorage.getItem('gender');
  ngOnInit(): void {
   this.src  = this.sanitizer.bypassSecurityTrustResourceUrl(this.pro_img);  
  }

}
