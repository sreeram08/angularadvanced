import { Injectable } from '@angular/core';
// importing modules manually
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable, forkJoin } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ViewService {
 // base URL
 public baseUrl = 'https://restcountries.eu/rest/v2'

 // HttpClient declared in constructor
 constructor(private _http:HttpClient) { 
   console.log("http service is working")
 }

 //  method to get countries
 public getCountriesByRegion(regionId){   
   let response = this._http.get(this.baseUrl+'/region/'+regionId);
   console.log("Countries by Region : ",response);
   return response;     
 }

 public getCountriesByCurrency(currencyId){   
   let response = this._http.get(this.baseUrl+'/currency/'+currencyId);
   console.log("Countries by currency : "+response);
   return response;     
 }

 public getCountriesByLanguage(languageId){   
   let response = this._http.get(this.baseUrl+'/lang/'+languageId);
   console.log("Countries by Language : "+response);
   return response;     
 }

 public getCountryDetails(countryId){   
   let response = this._http.get(this.baseUrl+'/alpha/'+countryId);
   console.log("Country Details : "+response);
   return response;     
 }
}
