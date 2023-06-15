import { Component } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'list-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent {
  carsCargados: any[] = [];
  //inyectarlo propiedad e programacion orientada a objetos (inyeccion de dependencias)
  constructor(
    private carsServices: CarsService,
    private router: Router,
    private services: ServicesService
  ) {}
  //para estar seguro que solo se usa en ese componente pomenos private

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.carsServices.getCars().subscribe((cars: any) => {
      //cars solo existe entre llaves
      (this.carsCargados = cars), //por eso lo guardamos en una variable para poder sacar el cars y utilizarlo
        console.log(this.carsCargados);
    });
  }
}

//inyectarlo propiedad e programacion orientada a objetos (inyeccion de dependencias)
/* constructor(private carsServices:CarsService){ //para estar seguro que solo se usa en ese componente pomenos private
   this.carsServices.getCars().subscribe((cars:any)=>{//cars solo existe entre llaves
    this.carsCargados =cars,//por eso lo guardamos en una variable para poder sacar el cars y utilizarlo
    console.log(this.carsCargados);

   })
  }  */

/* const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
  contentType: String
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image; */
