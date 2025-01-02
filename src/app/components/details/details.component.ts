import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CountriesService } from '../../core/services/countries.service';
import { Icountry } from '../../core/interfaces/icountry';
import { DarkModeService } from '../../core/services/dark-mode.service';
import { IcountryApi } from '../../core/interfaces/icountryApi';

interface City {
  name: string;
}

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  private readonly _ActivatedRoute = inject(ActivatedRoute)
  private readonly _CountriesService=inject(CountriesService)
  darkModeService:DarkModeService=inject(DarkModeService)
  countryName!:any
  country!:Icountry|any
  countryApi!:IcountryApi|any
  currencies:any=[]
   langs:any[]=[];
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (p) => {
        this.countryName = p.get('name')!
        this._CountriesService.getCountryByName(this.countryName).subscribe({
          next: (res) => {
            this.countryApi=res[0]
            console.log("country is",  this.countryApi);  
            let keys = [];
            for (let key in this.countryApi.currencies) {      
                if (this.countryApi.currencies.hasOwnProperty(key)) keys.push(key);
            }
            this.currencies=keys
            console.log(this.currencies);
            for (let key in this.countryApi.languages) {      
              this.langs.push(key)  
            }
            console.log(this.langs);
            
            
          },
          error: (err) => {
            console.log(err);
          }
        })   
        
      }
    })
  }

}
