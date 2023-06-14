import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
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
    localStorage.setItem('email', this.myForm.value.email)
    this.myForm.reset();
  }
}
