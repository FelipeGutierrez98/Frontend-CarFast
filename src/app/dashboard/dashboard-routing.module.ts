import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarsComponent } from './pages/cars/cars.component';
import { CarbyidComponent } from './pages/carbyid/carbyid.component';



const routes: Routes = [
    {
      path: '', 
      component:HomeComponent,
      children:[
        {path:'carros',component:CarsComponent},
        {path:'carros/:id',component:CarbyidComponent},
      
      ]

      
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}