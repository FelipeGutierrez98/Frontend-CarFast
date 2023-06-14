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
import { VenderCarroComponent } from './pages/vender-carro/vender-carro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    CarsComponent,
    HeadersComponent,
    CarbyidComponent,
    FilterComponent,
    FooterComponent,
    HomeComponent,
    Notfound404Component,
    VenderCarroComponent,
    ContactoComponent,
    AboutComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule,FormsModule, ReactiveFormsModule],
  exports: [CarsComponent, HeadersComponent, CarbyidComponent, FooterComponent],
})
export class DashboardModule {}
