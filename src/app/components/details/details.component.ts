import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CountriesService } from '../../core/services/countries.service';
import { Icountry } from '../../core/interfaces/icountry';
import { DarkModeService } from '../../core/services/dark-mode.service';

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
  countryID!:any
  country!:Icountry|any
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (p) => {
        this.countryID = p.get('id')!
        this._CountriesService.countries.map((item)=>{
          if(item.id==this.countryID){
            this.country=item
            console.log(this.country);
          }
          
        })        
      }
    })
  }

}
