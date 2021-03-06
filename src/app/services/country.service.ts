import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountries(name) {
   return  this.http.get<any[]>("http://restcountries.eu/rest/v2/name/" + name)
  }

  getAllCountries(){
  return  this.http.get<any[]>("https://restcountries.eu/rest/v2/all");
  }

  getAllCities(country:string){

    let countryObject ={country}
    return this.http.post("https://countriesnow.space/api/v0.1/countries/cities",countryObject);
  }
}
