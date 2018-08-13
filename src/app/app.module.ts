import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importing modules 
import {RouterModule,Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// importing components
import { ViewService } from './view.service';

import { AppComponent } from './app.component';
import { RegionviewComponent } from './regionview/regionview.component';
import { CountryviewComponent } from './countryview/countryview.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionviewComponent,
    CountryviewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'regionview/:regionId',component:RegionviewComponent},
      {path:'countries/currency/:currencyId',component:RegionviewComponent},
      {path:'countries/lang/:languageId',component:RegionviewComponent},
      {path:'country/:countryId',component:CountryviewComponent},
      {path:'',redirectTo:'home',pathMatch:'full'}
      
    ])
  ],
  providers: [ViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
