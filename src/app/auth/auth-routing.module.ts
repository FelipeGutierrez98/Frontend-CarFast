import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { CreateComponent } from './user/create/create.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ClienteNoRegistradoComponent } from './user/cliente-no-registrado/cliente-no-registrado.component';
import { Notfound404Component } from '../dashboard/pages/notfound404/notfound404.component';
UserComponent;

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'ingresar', component: LoginComponent },
      { path: 'registrarse', component: CreateComponent },
      {
        path: 'cliente-no-registrado',
        component: ClienteNoRegistradoComponent,
      },
      { path: 'perfil', component: ProfileComponent },
      { path: '', redirectTo: 'ingresar', pathMatch: 'full' },
      { path: '**', component: Notfound404Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
/*
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'create', component: CreateComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  }, */
