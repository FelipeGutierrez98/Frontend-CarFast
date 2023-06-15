import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';

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
  email = localStorage.getItem('email');
  idUser!: string;

  constructor(
    private servicesServices: ServicesService,
    private fb: FormBuilder
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
    this.idUser = this.servicesServices.readToken().id;

    this.servicesServices.getUser(this.idUser).subscribe(
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
}
