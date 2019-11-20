import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Route, RouterModule} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'localhost:8080/auth/login';
  constructor(private http: HttpClient, private rote: Route) { }

  public login(username, password) : Observable<any> {
    return this.http.get(this.url + '/' + username + '/' + password);
  }
}
