import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
 
  selectFile!:File;
  userProfile!:any;
  
  editValue:boolean=false;
  email=localStorage.getItem('email')

  editProfile(){
    this.editValue=true;
  }

  constructor(private  servicesServices:ServicesService ){}

  ngOnInit(){
    this.getUser();
  }

  getUser(){//movimos la funcionalidad 
    this.servicesServices.getUser(this.email)
    .subscribe(
      (response:any) => {
        console.log("response: ",response);
        this.userProfile = response;
      },
      (error) => {
        console.log("Error: ", error);
      }
    )
  }

  cancelUpdate(){
    this.editValue=false;
  }

  onFileSelected(event:any){
    this.selectFile = event.target.files[0];
  }

  updateProfile(){
    this.servicesServices.updateUser(this.userProfile)
  }
}
