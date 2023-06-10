import { Component } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carbyid',
  templateUrl: './carbyid.component.html',
  styleUrls: ['./carbyid.component.css'],
})
export class CarbyidComponent {
  carCargado: any;

  constructor(
    private carsServices: CarsService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    console.log(this.router.url);

    console.log(this.activedRoute.snapshot.params['id']);

    this.getCar(this.activedRoute.snapshot.params['id']); //snap =traer el parametro sde la url del navegador
  }

  getCar(id: string) {
    this.carsServices.getCar(id).subscribe((result: any) => {
      this.carCargado = result;
      console.log(this.carCargado);
      /* this.router.navigate([`/getCar/${id}`])   */
    });
  }
}
