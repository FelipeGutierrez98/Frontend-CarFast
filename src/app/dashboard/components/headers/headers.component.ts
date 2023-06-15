import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css'],
})
export class HeadersComponent {
  isLogged!: string | null;
  constructor(private service: ServicesService) {
    this.service.isUserLogged$.subscribe((token) => {
      this.isLogged = token;
    });
  }
  salir() {
    localStorage.removeItem('token');
    location.reload();
  }
}
