import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  contactForm!: FormGroup;
  enviando!: boolean;

  constructor(private fb: FormBuilder, private service: ServicesService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
      subject: ['', Validators.required],
    });
  }

  enviarFormulario() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.enviando = true;
    this.service.contactFromUser(this.contactForm.value).subscribe(() => {
      Swal.fire('Correo enviado', 'Pronto un asesor de contactará', 'success');
      this.enviando = false;
    });
  }
}
