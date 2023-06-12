import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './pages/cars/cars.component';
import { HeadersComponent } from './components/headers/headers.component';
import { CarbyidComponent } from './pages/carbyid/carbyid.component';
import { FilterComponent } from './components/filter/filter.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { Notfound404Component } from './pages/notfound404/notfound404.component';

@NgModule({
  declarations: [
    CarsComponent,
    HeadersComponent,
    CarbyidComponent,
    FilterComponent,
    FooterComponent,
    HomeComponent,
    Notfound404Component,
  ],
  imports: [CommonModule, DashboardRoutingModule],
  exports: [CarsComponent, HeadersComponent, CarbyidComponent, FooterComponent],
})
export class DashboardModule {}
