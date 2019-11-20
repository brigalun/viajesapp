import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  private redondo: boolean = false;
  private sencillo: boolean = false;

  private vuelos: any = null;
  constructor(private data : LoginService) { }

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

  public buscar() {

    this.sencillo = true;
    this.redondo = true
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
      this.vuelos = this.data.login("adasdas", "asasd").subscribe(
        datos => {
          // Si los datos retornados del servidor son de tipo String.
        this.data = JSON.parse(datos).places;

        // Si los datos retornados del servidor ya son objeto
        this.data = datos.places;
      },
        error => {
          console.log("Ocurió un error al obtener los datos de servidor: " + error)
        })
    })
  }
}
