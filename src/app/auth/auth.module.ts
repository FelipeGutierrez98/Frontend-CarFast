import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './user/login/login.component';
import { CreateComponent } from './user/create/create.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    CreateComponent,
    ProfileComponent,
    UserComponent,

  ],
  imports: [CommonModule, AuthRoutingModule,FormsModule],
  exports: [LoginComponent, CreateComponent, ProfileComponent, UserComponent],
})
export class AuthModule {}
