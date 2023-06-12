import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
<<<<<<< Updated upstream
  
  email:string ='';
  password:string ='';
  
  constructor(private servicesServices:ServicesService){}
  login(){
   this.servicesServices.login(this.email,this.password);
   console.log('email',this.email);
   console.log('password',this.password);
   
=======
  myForm!: FormGroup;

  email: string = '';
  password: string = '';

  constructor(
    private servicesServices: ServicesService,
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  
  login() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.servicesServices.login(this.myForm.value);
    console.log(this.myForm.value);
    this.myForm.reset();
>>>>>>> Stashed changes
  }
}

