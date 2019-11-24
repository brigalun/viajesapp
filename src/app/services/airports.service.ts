import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirportsService {

  constructor(private http : HttpClient) { }

  url: string = "http://ec2-52-8-193-255.us-west-1.compute.amazonaws.com:8080/airport";

  public getAllAirports(): Observable<any> {
    let authHeader = new HttpHeaders({
      "Content-Type" : "application/json"
    });
    return this.http.get<any>(this.url + "/getAll", {headers:authHeader});
  }
}
