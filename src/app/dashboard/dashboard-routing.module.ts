import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarsComponent } from './pages/cars/cars.component';
import { CarbyidComponent } from './pages/carbyid/carbyid.component';
import { Notfound404Component } from './pages/notfound404/notfound404.component';
import { authGuard } from '../guards/auth.guard';
import { VenderCarroComponent } from './pages/vender-carro/vender-carro.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'carros', component: CarsComponent },
      {
        path: 'vender-carro',
        canActivate: [authGuard],
        component: VenderCarroComponent,
      },
      {
        path: 'carros/:id',
        canActivate: [authGuard],
        component: CarbyidComponent,
      },
      { path: '', redirectTo: 'carros', pathMatch: 'full' },
      { path: '**', component: Notfound404Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
