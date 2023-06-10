import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  username!:string;
 email!:string;
 password!:string;

 constructor(private servicesServices: ServicesService){}
 createUser():void{
  this.servicesServices.create(this.username,this.email,this.password);
  console.log('user created');
  
 }
}
