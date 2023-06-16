import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  myForm!: FormGroup;
  selectFile!: File;
  userProfile!: any;

  editValue: boolean = false;
  showChangePassword: boolean = false;
  email = localStorage.getItem('email');
  idUser!: string;

  constructor(
    private servicesServices: ServicesService,
    private fb: FormBuilder,
    private router: Router
  ) {
    // this.servicesServices.getUser(this.servicesServices.getToken()).subscribe();
    this.myForm = this.fb.group({
      userName: ['', Validators.required],
      lastname: ['', Validators.required],
      cellphone: ['', [Validators.required, Validators.minLength(8)]],
      email: [
        { value: '', disabled: true },
        [Validators.required, Validators.email],
      ],
    });
  }

  ngOnInit() {
    this.getUser();
  }

  editProfile() {
    this.editValue = true;
  }

  getUser() {
    // movimos la funcionalidad
    this.servicesServices.getUser().subscribe(
      (response: any) => {
        console.log('response: ', response);
        this.userProfile = response;
        this.myForm.reset(this.userProfile);
        this.editValue = false;
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
  }
  cancelUpdate() {
    this.editValue = false;
  }

  onFileSelected(event: any) {
    this.selectFile = event.target.files[0];
  }

  updateProfile() {
    if (this.myForm.invalid) {
      console.log(this.myForm.value);

      this.myForm.markAllAsTouched();
      return;
    }
    this.servicesServices.updateUser(this.myForm.value).subscribe(
      (response: any) => {
        console.log('usuario actualizado. ', response);
        this.getUser();
      },
      (error: any) => {
        console.log('Error: ', error);
      }
    );
  }

  deleteProfile() {
    Swal.fire({
      title: '¿Seguro quiere eliminar la cuenta?',
      text: 'Una vez eliminada, no podrá recuperarla',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicesServices.deleteUser().subscribe((res) => {
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          localStorage.clear();
          this.router.navigate(['/auth/registrarse']);
        });
      }
    });
  }

  cancelar() {
    this.editValue = false;
  }
}
