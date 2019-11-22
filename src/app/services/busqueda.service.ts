import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})


export class BusquedaService {
	constructor(private http: HttpClient) { }
	headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

	obtenerAereopuerto(): Observable<any>{
		const url_api = "ec2-52-8-193-255.us-west-1.compute.amazonaws.com:8080/airport/getAll";
		return this.http.get<any>(url_api);
	}

	obtenerCiudad(idCity): Observable<any>{
		const url_api = "ec2-52-8-193-255.us-west-1.compute.amazonaws.com:8080/city/getCityDetail/{idCity}";
		return this.http.get<any>(url_api);
	}

	obtenertodo(): Observable<any>{
		const url_api = "ec2-52-8-193-255.us-west-1.compute.amazonaws.com:8080/place/getAll";
		return this.http.get<any>(url_api);
	}

	obtenerciudadPorEstado(idState): Observable<any>{
		const url_api = "ec2-52-8-193-255.us-west-1.compute.amazonaws.com:8080/place/getPlacesByState/{idState}";
		return this.http.get<any>(url_api);
	}
}
