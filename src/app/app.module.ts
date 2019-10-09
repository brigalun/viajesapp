import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagoComponent } from './components/pago/pago.component';
import { RegistroComponent } from './components/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    BusquedaComponent,
    NavbarComponent,
    PagoComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
