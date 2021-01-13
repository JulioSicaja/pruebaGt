import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private http:HttpClient) { 
    console.log("Servicio de ciudades");
  }
  getCountries(): Observable<any>{ //obtener datos de Api  Rest
    return this.http.get('https://restcountries-v1.p.rapidapi.com/all?rapidapi-key=cd47a0b8eemsh03aa7a5207d932ap1d4be3jsn25d0e6187907');
  }
  getCountriesbyCode(code: string): Observable<any>{  //Obtener Datos de Api  Rest
    const url_api = `https://restcountries-v1.p.rapidapi.com/alpha/${code}?rapidapi-key=cd47a0b8eemsh03aa7a5207d932ap1d4be3jsn25d0e6187907`;
    return this.http.get(url_api);
  }
}
