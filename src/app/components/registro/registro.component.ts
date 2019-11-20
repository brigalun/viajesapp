import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import Swal from "sweetalert2";
import {Router} from '@angular/router';
import {User} from '../../models/user';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  user: User = {
    nombre: "",
    apellidos: "",
    email: "",
    password: ""

  };
  succesLoginMessage = Swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 5000
  });

  public isError = false;

  ngOnInit() {}

  onIsError():void{
    this.isError= true;
    setTimeout(()=>{
      this.isError= false;
    },4000);
  }

  onRegister(form: NgForm): void {

    if (form.valid) {
      console.log(JSON.stringify(this.user));

      Swal.fire({
        title: 'Enviando datos...',
        onBeforeOpen: () => {
          Swal.showLoading();
        }
      });

      this.authService.registerUser(this.user.nombre, this.user.apellidos, this.user.email, this.user.password)
        .subscribe( data => {
          this.router.navigate(['/login']);
          this.succesLoginMessage.fire({
            type: 'success',
            title: 'Ahora puedes iniciar sesión, ¡Bienvenido!'
          });
        }, error => {
          Swal.fire({
            type: 'error',
            title: 'Error en el servidor',
            text: 'Ocurrió un error en el servidor : ' + error.message
          });
        });

    this.authService.registerUser(this.user.nombre, this.user.apellidos, this.user.email, this.user.password)
    .subscribe( data =>{
      //por el momento lo imprimimos en cosola
      console.log(JSON.stringify(data));


    });
   // });
    } else{
      console.log("CAMPOS VACIOS");
      this.onIsError();
    }




  }

}

