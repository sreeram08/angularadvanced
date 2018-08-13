import { Component, OnInit } from '@angular/core';
import { ViewService } from '../view.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-countryview',
  templateUrl: './countryview.component.html',
  styleUrls: ['./countryview.component.css']
})
export class CountryviewComponent implements OnInit {
  public countryDetails:any;

  constructor(private _route:ActivatedRoute, private router:Router,public viewservice:ViewService) { }

  ngOnInit() {
    let countryId = this._route.snapshot.paramMap.get('countryId')
    console.log("Country Component Loaded");
    
    this.viewservice.getCountryDetails(countryId).subscribe(

      data =>{
        console.log(data);
        this.countryDetails = data;
        console.log("Country Details : ",this.countryDetails)
      },
      error =>{
        console.log(error.errorMessage);
      }
    );
    
  }

}
