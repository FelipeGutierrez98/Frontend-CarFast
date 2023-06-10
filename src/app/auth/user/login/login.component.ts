import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email:string ='';
  password:string ='';
  
  constructor(private servicesServices:ServicesService){}
  login(){
   this.servicesServices.login(this.email,this.password);
   console.log('email',this.email);
   console.log('password',this.password);
   
  }
}

