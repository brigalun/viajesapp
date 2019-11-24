import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../../services/busqueda.service';
import Swal from "sweetalert2";
import {AuthService} from '../../services/auth.service';
import {AirportsService} from '../../services/airports.service';
import {Search} from '../../models/search';
import {FlightsServiceService} from '../../services/flights-service.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit {

  aeropuertos: any;
  resultsGo: any;
  resultsBack: any;
  search: Search;
  constructor(private service: BusquedaService, private airportService : AirportsService, private flightsService : FlightsServiceService) {
    this.resultsGo = [];
    this.resultsBack = [];
    this.aeropuertos = null;
    this.search = new Search();
    this.search.type = true;
    this.airportService.getAllAirports().subscribe(
      data => {
        console.log("éxito");
        console.log(data);
        this.aeropuertos = data.airports
      }, error => {
        console.log("error");
        console.log(error);
      }
    );
  }


  ngOnInit() {
  }


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

    public setOrigin(id) {
    console.log("ID del aeropuerto seleccionado: " + id);
      this.search.origin = id;
    }

    public setDestination(id) {
      console.log("ID del aeropuerto seleccionado: " + id);
      this.search.destination = id;
    }

  public buscar() {

    console.log("Searching: ");
    console.log(this.search);

    Swal.fire({
      title: 'Buscando los mejores vuelos para ti...',
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });

    this.flightsService.getSearchFlights(
      this.search.type,
      this.search.origin.split(", ")[0],
      this.search.destination.split(", ")[0],
      this.search.dateGo,
      this.search.dateBack).subscribe(
        data => {
          this.resultsGo = data.flights.flightsGo;
          this.resultsBack = data.flights.flightsBack;

          if (this.resultsGo.length > 0 && this.resultsBack.length > 0) {
            Swal.fire({
              position: 'top-end',
              type: 'success',
              title: 'Hemos encontrado ' + this.resultsGo.length + ' vuelo(s) de ida y ' + this.resultsBack.length + ' vuelo(s) de regreso',
              showConfirmButton: false,
              timer: 4000
            });
          } else if (this.resultsGo.length == 0 && this.resultsBack.length > 0) {
            Swal.fire({
              position: 'top-end',
              type: 'success',
              title: 'Hemos encontrado ' + this.resultsBack.length + ' vuelo(s) de regreso',
              showConfirmButton: false,
              timer: 4000
            });
          } else if (this.resultsGo.length > 0 && this.resultsBack.length == 0) {
            Swal.fire({
              position: 'top-end',
              type: 'success',
              title: 'Hemos encontrado ' + this.resultsGo.length + ' vuelo(s) de ida',
              showConfirmButton: false,
              timer: 4000
            });
          } else {
            Swal.fire({
              position: 'center',
              type: 'warning',
              title: 'No hemos encontrado vuelos que coincidan con tus criterios de búsqueda, inténtalo de nuevo',
              showConfirmButton: true,
              timer: 4000
            });
          }
        }, error => {
        Swal.fire({
          type: 'error',
          title: 'Error de servidor',
          text: 'Ocurrió un error en el servidor, intentelo de nuevo más tarde',
          showConfirmButton: true
        });

      }
    );

  }

  public onItemChange(event) {
    if (this.search.type) this.search.type = false;
    else this.search.type = true;
  }
}
