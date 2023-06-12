import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './user/login/login.component';
import { CreateComponent } from './user/create/create.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { ClienteNoRegistradoComponent } from './user/cliente-no-registrado/cliente-no-registrado.component';

@NgModule({
  declarations: [
    LoginComponent,
    CreateComponent,
    ProfileComponent,
    UserComponent,
    ClienteNoRegistradoComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [LoginComponent, CreateComponent, ProfileComponent, UserComponent],
})
export class AuthModule {}
