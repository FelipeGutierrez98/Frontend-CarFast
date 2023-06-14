import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-vender-carro',
  templateUrl: './vender-carro.component.html',
  styleUrls: ['./vender-carro.component.css']
})
export class VenderCarroComponent {
  myForm!: FormGroup;


  constructor(
    private servicesServices: ServicesService,
    private fb: FormBuilder
  ) {
   
    this.myForm = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      precio: ['', Validators.required,],
      age: ['', Validators.required],
      transmision: ['', Validators.required],
      ciudad: ['', Validators.required],
      kilometraje: ['', Validators.required],
      
    });
  }

  createCar(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.servicesServices.createCar(this.myForm.value);
    this.myForm.reset();
  }
}
