import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  nombre!: string;
  email!: string;
  asunto!: string;
  mensaje!: string;

  constructor(private http: HttpClient) {}

  enviarFormulario() {
    const formData = {
      nombre: this.nombre,
      email: this.email,
      asunto: this.asunto,
      mensaje: this.mensaje
    };

    this.http.post('/enviar-correo', formData)
      .subscribe(
        () => {
          console.log('Correo enviado');
        },
        error => {
          console.error('Error al enviar el correo', error);
        }
      );
  }
}
