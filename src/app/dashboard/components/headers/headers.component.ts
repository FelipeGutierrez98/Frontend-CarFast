import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css'],
})
export class HeadersComponent {
  isLogged: any;
  constructor(private service: ServicesService) {
    this.isLogged = this.service.getToken();
    console.log(this.isLogged, 'THIS IS LOGGED');
  }
}
