import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './user/login/login.component';
import { CreateComponent } from './user/create/create.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    CreateComponent,
    ProfileComponent,
    UserComponent,

  ],
  imports: [CommonModule, AppRoutingModule,FormsModule],
  exports: [LoginComponent, CreateComponent, ProfileComponent, UserComponent],
})
export class AuthModule {}
