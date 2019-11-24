import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagoComponent } from './components/pago/pago.component';
import { RegistroComponent } from './components/registro/registro.component';
import {RouterModule} from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import {ReservaComponent} from './components/reserva/reserva.component';

import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {DataApiService} from './services/data-api.service';
import { AdminVuelosComponent } from './components/admin-vuelos/admin-vuelos.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import {FlightsServiceService} from './services/flights-service.service';
import {BusquedaService} from './services/busqueda.service';
import {AirportsService} from './services/airports.service';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    BusquedaComponent,
    NavbarComponent,
    PagoComponent,
    AboutusComponent,
    RegistroComponent,
    ReservaComponent,
    AdminVuelosComponent,
    AdminUsersComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: PrincipalComponent},
      {path: 'registro', component: RegistroComponent},
      {path: 'login', component: LoginComponent},
      {path: 'pago', component: PagoComponent},
      {path: 'aboutus', component: AboutusComponent},
      {path: 'reserva', component: ReservaComponent},
      {path: 'adminVuelos', component: AdminVuelosComponent},
      {path: 'adminUsers', component: AdminUsersComponent}
    ])
  ],
  providers: [AuthService, DataApiService, FlightsServiceService, BusquedaService, AirportsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
