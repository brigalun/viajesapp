import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  admin = false;
  succesLoginMessage = Swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 5000
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.admin = false;
    var currentUser = this.authService.getCurrentUser();
    console.log(currentUser);
    if (this.authService.isAuthenticated() && currentUser != null) {
      for (var i = 0 ; i < currentUser.authorities.length ; i++) {
        if (currentUser.authorities[i] == 'ROLE_ADMIN') {
          console.log("El usuario es administrador.");
          this.admin = true;
        }
      }
    }
  }

  logout() {
    this.authService.logoutUser();
    this.router.navigate(["/login"]);
    this.succesLoginMessage.fire({
      type: 'success',
      title: 'Has salido, hasta luego.'
    });
  }

}
