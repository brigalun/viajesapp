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



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    BusquedaComponent,
    NavbarComponent,
    PagoComponent,
    AboutusComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'principal', pathMatch: 'full'},
      {path: 'home', component: PrincipalComponent},
      {path: 'registro', component: RegistroComponent},
      {path: 'login', component: LoginComponent},
      {path: 'pago', component: PagoComponent},
      {path: 'aboutus', component: AboutusComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
