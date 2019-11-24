import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";
import {User} from '../models/user';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private htttp: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  url: string = "http://ec2-52-8-193-255.us-west-1.compute.amazonaws.com:8080";

  /**
   * Registro de usuarios
   */
  registerUser(nombre: string, apellidos: string, email: string, password: string): Observable<any> {
    let body = {nombre, apellidos, email, password, activo: true};
    return this.htttp.post<any>(this.url + "/user/save", body,{headers: this.headers});
  }

  /**
   * Login de usuarios
   */
  loginUser(email: string, password: string): Observable<any> {
    let loginHeader = new HttpHeaders({
      "Content-Type" : "application/x-www-form-urlencoded",
      "Authorization": "Basic cmVsYXh0cmF2ZWw6UmVsQHhfVHJhdmVsMiMu"
    });
    let body = `username=${email}&password=${password}&grant_type=password`;
    return this.htttp.post<User>(this.url + "/oauth/token", body, {headers : loginHeader});
  }

  setCurrentUser(user: any): void {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  setToken(token: string): void {
    localStorage.setItem("accessToken", token);
  }

  getToken(): string {
    return localStorage.getItem("accessToken");
  }

  getCurrentUser(): any {
    let userToken = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(userToken)) {
      return JSON.parse(userToken);
    }
    return null;
  }

  isAuthenticated(): boolean {
    if (this.getCurrentUser() == null || this.getToken() == null)
      return false;
    return true;
  }

  logoutUser() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
  }
}
