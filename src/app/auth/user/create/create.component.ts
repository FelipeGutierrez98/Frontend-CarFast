import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  myForm!: FormGroup;
  datosUsuarios: any;

  // username!: string;
  // email!: string;
  // password!: string;

  constructor(
    private servicesServices: ServicesService,
    private fb: FormBuilder
  ) {
    // this.datosUsuarios = this.servicesServices.updateInventado();
    // console.log(this.datosUsuarios, 'datos inventados');

    this.myForm = this.fb.group({
      userName: ['', Validators.required],
      lastname: ['', Validators.required],
      cellphone: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  createUser(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.servicesServices.create(this.myForm.value);
    this.myForm.reset();
  }

  // createUser(): void {
  //   this.servicesServices.create(this.username, this.email, this.password);
  //   console.log('user created');
  // }
}
