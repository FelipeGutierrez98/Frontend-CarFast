import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarbyidComponent } from './dashboard/pages/carbyid/carbyid.component';
import { CarsComponent } from './dashboard/pages/cars/cars.component';
import { UserComponent } from './auth/user/user.component';
import { Notfound404Component } from './dashboard/pages/notfound404/notfound404.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: Notfound404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

/* {
   path: 'getCar', component:CarbyidComponent
  path: 'getCar/:id',
  component: CarbyidComponent,
},
{
  path: '',
  component: CarsComponent,
},
{
  path:'user',component:UserComponent
} */
