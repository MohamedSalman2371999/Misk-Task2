import { DropdownModule } from 'primeng/dropdown';
import { Component, inject, OnInit } from '@angular/core';
import { Icountry } from '../../core/interfaces/icountry';
import { RouterLink } from '@angular/router';
import { CountriesService } from '../../core/services/countries.service';
import { FormsModule } from '@angular/forms';
import { CoutrySearchPipe } from '../../core/pipes/coutry-search.pipe';
import { FillterByRegionPipe } from '../../core/pipes/fillter-by-region.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { TransService } from '../../core/trans.service';

interface City {
  name: string;
}

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [NgClass, RouterLink, FormsModule, CoutrySearchPipe, FillterByRegionPipe, DropdownModule, TranslateModule, HttpClientModule],
  templateUrl: './challenge.component.html',
  styleUrl: './challenge.component.scss'
})
export class ChallengeComponent implements OnInit {
  private readonly _CountriesService = inject(CountriesService)
  private readonly _TransService = inject(TransService)
  countries: Icountry[] = []
  countries2: Icountry[] = []
  countryID!: number | null
  text: string = ''
  cities: City[] | undefined;
  region: string = ''
  filterPlaceholder: string = 'Filter by Region'
  isSort: boolean = true
  checkpag: boolean = false
  pagenation: number = 1


  ngOnInit(): void {
    this.cities = [
      { name: 'All' },
      { name: 'Europe' },
      { name: 'Americas' },
      { name: 'Africa' },
      { name: 'Asia' },
    ];
    this.sort()

  }
  selectRegion(e: any): void {
    // console.log(e.target.innerText);
    // if(e.target.innerText!==undefined||e.target.innerText!=="All") {
    //   this.region=e.target.innerText

    // }else if(e.target.innerText=="All"){
    //   this.region=''

    // }
    // if (e.target.value==undefined) {
    //   this.region=''    
    // }

    console.log(e.target.innerText);
    this.filterPlaceholder = e.target.innerText
    this.cities?.map((city) => {
      if (e.target.innerText == city.name) {
        this.region = e.target.innerText
        if (e.target.innerText == "All") {
          this.region = ''
        }
      }
    })

  }
  sort(): void {
    if (!this.isSort) {
      this.countries = this._CountriesService.countries.sort((minPopulation, maxPopulation) => {
        return minPopulation.population - maxPopulation.population;
      })
      this.isSort = true
    } else {
      this.countries = this._CountriesService.countries.sort((minPopulation, maxPopulation) => {
        return maxPopulation.population - minPopulation.population;
      })
      this.isSort = false
    }
  }

  nextPage(): void {
    this.pagenation = 2
    this.countries2 = this._CountriesService.countries.sort((minPopulation, maxPopulation) => {
      return minPopulation.population - maxPopulation.population;
    })
    this.checkpag = true
  }
  prevPage(): void {
    this.pagenation = 1
    this.countries = this._CountriesService.countries.sort((minPopulation, maxPopulation) => {
      return maxPopulation.population - minPopulation.population;
    })
    this.checkpag = false
  }

}
