import { Component, OnInit } from '@angular/core';
// importing modules manually
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import { Observable, forkJoin } from "rxjs";
import { map } from "rxjs/operators";
// importing service
import { ViewService } from '../view.service';
@Component({
  selector: 'app-regionview',
  templateUrl: './regionview.component.html',
  styleUrls: ['./regionview.component.css']
})
export class RegionviewComponent implements OnInit {
  public countries:any;
  public region;
  public currency;
  public language;
  constructor(public location: Location,public _route:ActivatedRoute, public router:Router, public viewservice:ViewService) { }

  ngOnInit() {
    console.log("Countries Component Loaded");

    this._route.params.subscribe(param => {
    
      let regionId = this._route.snapshot.paramMap.get('regionId')
      this.region = regionId;
        this.viewservice.getCountriesByRegion(regionId).subscribe(
          
          data =>{
            console.log(data);
            
            this.countries = data;
            console.log("All Countries : ",this.countries)
          },
          error =>{
            console.log(error.errorMessage);
          }
        )
    });

    this._route.params.subscribe(param => {

        let currencyId = this._route.snapshot.paramMap.get('currencyId')
        this.currency = currencyId;
        this.viewservice.getCountriesByCurrency(currencyId).subscribe(

          data =>{
            console.log(data);
            this.countries = data;
            console.log("All Countries : ",this.countries)
          },
          error =>{
            console.log(error.errorMessage);
          }
        )
  });

    this._route.params.subscribe(param => { 

      let languageId = this._route.snapshot.paramMap.get('languageId')
      this.language = languageId;
        this.viewservice.getCountriesByLanguage(languageId).subscribe(

          data =>{
            console.log(data);
            this.countries = data;
            console.log("All Countries : ",this.countries)
          },
          error =>{
            console.log(error.errorMessage);
          }
        )
    });
    

  }
  
  goback() {
    this.location.back(); 
  }

}
