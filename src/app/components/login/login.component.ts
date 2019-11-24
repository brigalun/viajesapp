import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user';
import Swal from "sweetalert2";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = new User();
  succesLoginMessage = Swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 5000
  });

  constructor(private authService : AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  public loginUser() {
    Swal.fire({
      title: 'Estamos validando sus credenciales...',
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });
    this.authService.loginUser(this.user.email, this.user.password).subscribe(data => {
      let accessToken = data.access_token;
      let userToken = JSON.parse(atob(accessToken.split(".")[1]));

      // Se almacenan los datos del usuario y el token
      this.authService.setCurrentUser(userToken);
      this.authService.setToken(accessToken);
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Bienvenido, ' + userToken.name,
        showConfirmButton: false,
        timer: 4000
      });
      /*this.succesLoginMessage.fire({
        type: 'success',
        title: 'Bienvenido, ' + userToken.name
      });*/
      this.router.navigate(["/home"]);
    }, error => {
      Swal.fire({
        type: 'error',
        title: 'Credenciales inválidas',
        text: 'Verifique sus credenciales e inténtelo de nuevo'
      });
    })
  }

}
