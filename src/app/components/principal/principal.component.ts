import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../../services/busqueda.service';
import Swal from "sweetalert2";
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit {
  
  constructor(private service: BusquedaService, private loginService : LoginService) { }

  ngOnInit() { }

  public openCity(evt, cityName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  public obtenerTodo(){
    var vuelos = this.service.obtenerAereopuerto().subscribe(
    data => {
        console.log("Datos obtenidos: ");
        console.log(data);
      }, error => {
        console.log("Error:");
        console.log(error);
      }
    );
  }

  public obtenerBusqueda(idciudad){
    var vuelos = this.service.obtenerCiudad(idciudad).subscribe(
    data => {
        console.log("Datos obtenidos: ");
        console.log(data);
      }, error => {
        console.log("Error:");
        console.log(error);
      }
    );

  }
  public colocarcard(){
    var tVuelo = (<HTMLInputElement>document.getElementById("customRadioInline1")).value;
    var origen = (<HTMLInputElement>document.getElementById("origenvuelo")).value;
    var destino = (<HTMLInputElement>document.getElementById("destinovuelo")).value;
    var fechaida = (<HTMLInputElement>document.getElementById("fechaida")).value;
    var fechavuelta = (<HTMLInputElement>document.getElementById("fechavuelta")).value;
    var categ = (<HTMLInputElement>document.getElementById("categoriavuelo")).value;
    var npersons = (<HTMLInputElement>document.getElementById("numeropersonas")).value;
    if(tVuelo == "sencillo"){
      var idciudad = this.obtenerIdCiudad(origen);
       this.obtenerBusqueda(idciudad);
    }
  }

  public obtenerIdCiudad(nombreciudad){
  var id;
    if(nombreciudad == "Querétaro")
      id = 9;
    if(nombreciudad == "Guadalajara")
      id = 14;
    if(nombreciudad == "Nuevo Laredo")
      id = 55;
    if(nombreciudad == "Cuernavaca")
      id = 32;
    if(nombreciudad == "Palenque")
      id = 63;
    if(nombreciudad == "Tijuana")
      id = 13;
    return id;
    //Aquí iria todo lo demas
    }
  public buscar() {

    var sencillo = true;
    var redondo = true
    Swal.fire({
      title: 'Buscando los mejores vuelos para ti',
      timer: 3000,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
      onClose: () => {
        //Do something
      }
    }).then((result) => {
      this.loginService.login("adasdas", "asasd").subscribe(
        datos => {
      },
        error => {
        })
    })
  }
}
