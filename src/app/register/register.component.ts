import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  img= '';
  email= '';
  pass='';
  name='';
  lname='';
  tel='';
  gender='';
  check : any;
  src: any;
  base64: any;
  siteKey = '6LefaTYaAAAAAC0i0MjqI7Sm8jIUZGnQxurffI1r';
  constructor(private http:HttpClient,private router:Router,private sanitizer: DomSanitizer) { 
    console.log(this.email);
  }
  
  ngOnInit(): void {

  }
  Success(){
    this.check = true;
    console.log(this.check);
  }
 
  register(){
    if(this.check){
      console.log('test');
      console.log(this.base64);
      console.log(this.email);
      console.log(this.pass);
      console.log(this.name);
      console.log(this.lname);
      console.log(this.tel);
      console.log(this.gender);
    
      let json = {img:this.base64, email:this.email, pass:this.pass, name:this.name, lname:this.lname, tel:this.tel, gender:this.gender };
      this.http.post('http://localhost:3000/register/regis/',json).subscribe(response=>{
          console.log('response');
          if(response){
            this.router.navigateByUrl('/login');
          }
      },error=>
      {
        console.log('Error'+this.email);
      });
    }
    
  }
  getFile(fileimage: any) {
    console.log(fileimage.files[0]);
    let file = fileimage.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // console.log(reader.result)
      this.base64 = reader.result;
      let img = {
        base64:this.base64
      }
      console.log(img);
      this.src = this.sanitizer.bypassSecurityTrustResourceUrl(this.base64);

    }
  }
  
}
