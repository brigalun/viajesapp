import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsServiceService {

  constructor(private http : HttpClient) { }
  //url: string = "http://ec2-52-8-193-255.us-west-1.compute.amazonaws.com:8080";
  url: string = "http://localhost:8080";

  public getAllFlights(): Observable<any> {
    return this.http.get(this.url + "/flights/getAll");
  }

  public delete(id : string, token : string) : Observable<any> {
    let authHeader = new HttpHeaders({
      "Content-Type" : "application/json",
      "Authorization": "Bearer " + token
    });
    return this.http.put<any>(this.url + "/flights/delete/" + id, null,{headers : authHeader});
  }
}
