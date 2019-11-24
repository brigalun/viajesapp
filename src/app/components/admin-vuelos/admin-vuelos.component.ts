import { Component, OnInit } from '@angular/core';
import {FlightsServiceService} from '../../services/flights-service.service';
import Swal from "sweetalert2";
import {AuthService} from '../../services/auth.service';
import {Flight} from '../../models/flight';

@Component({
  selector: 'app-admin-vuelos',
  templateUrl: './admin-vuelos.component.html',
  styleUrls: ['./admin-vuelos.component.css']
})
export class AdminVuelosComponent implements OnInit {

  fligths:any = null;
  bnEdit:boolean = null;
  flight: Flight;
  succesLoginMessage = Swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 5000
  });

  constructor(private flightsService : FlightsServiceService,
              private authService : AuthService) {
    this.bnEdit = false;
    this.flight = new Flight();
    console.log("se contruyó el componente");
  }

  ngOnInit() {
  }

  obtenerVuelos() {
    Swal.fire({
      title: 'Obteniendo vuelos...',
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });
    if (this.fligths == null)
      this.flightsService.getAllFlights().subscribe(
        data => {
          this.succesLoginMessage.fire({
            type: 'success',
            title: data.successful
          });
          this.fligths = data.vuelos;
      }, error => {
          console.log(error);
          Swal.fire({
            type: 'error',
            title: 'Ocurrió un error al obtener los vuelos',
            text: 'Mensaje: ' + error.error.error
          });
        });
  }

  editFlight(flight) {

    this.flight.date = flight.fecha;
    this.flight.airline = flight.aerolinea;
    this.flight.nameAirporOrigin = flight.aeropuertoOrigen.nombre;
    this.flight.descAirporOrigin= flight.aeropuertoOrigen.descripcion;
    this.flight.iataAirporOrigin = flight.aeropuertoOrigen.iata;
    this.flight.cityNameAirporOrigin = flight.aeropuertoOrigen.ciudad.nombre;
    this.flight.cityDescAirporOrigin = flight.aeropuertoOrigen.ciudad.descripcion;

    this.flight.nameAirporDestination = flight.aeropuertoDestino.nombre;
    this.flight.descAirporDestination = flight.aeropuertoDestino.descripcion;
    this.flight.iataAirporDestination= flight.aeropuertoDestino.iata;
    this.flight.cityNameAirporDestination = flight.aeropuertoDestino.ciudad.nombre;
    this.flight.cityDescAirporDestination = flight.aeropuertoDestino.ciudad.descripcion;

    console.log("Se asignaron los campos.");
    this.bnEdit = true;
  }

}
