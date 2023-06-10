import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarbyidComponent } from './dashboard/pages/carbyid/carbyid.component';
import { CarsComponent } from './dashboard/pages/cars/cars.component';
import { UserComponent } from './auth/user/user.component';


const routes: Routes = [
  {
    /* path: 'getCar', component:CarbyidComponent */
    path: 'getCar/:id',
    component: CarbyidComponent,
  },
  {
    path: '',
    component: CarsComponent,
  },
  {
    path:'user',component:UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
