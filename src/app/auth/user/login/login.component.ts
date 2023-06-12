import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  myForm!: FormGroup;
  emailLocalStorage:string="";
  // userLogin:any;
  email:string="";
  password:string="";
  
  constructor(private servicesServices:ServicesService, private fb: FormBuilder){

    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

  }
  
  login(){
   this.servicesServices.login(this.myForm.value);
  localStorage.setItem('email', this.myForm.value.email)
   console.log('email',this.myForm.value.email);
   console.log('password',this.myForm.value.password);
   
  }
}

