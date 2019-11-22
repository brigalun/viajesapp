import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  redondo: boolean = false;
  sencillo: boolean = false;

  vuelos: any = null;
  constructor(private authService : AuthService) { }

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
    /*this.sencillo = true;
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
      this.loginService.login("adasdas", "asasd").subscribe(
        datos => {
      },
        error => {
        })
    })*/
  }
}
