import { resolve } from 'node:path';
import { DropdownModule } from 'primeng/dropdown';
import { Component, ElementRef, inject, OnInit, ViewChild, viewChild } from '@angular/core';
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
import { IcountryApi } from '../../core/interfaces/icountryApi';

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
  countriesApi: IcountryApi[] = []
  countries2: Icountry[] = []
  countryID!: number | null
  text: string = ''
  cities: City[] | undefined;
  region: string = ''
  filterPlaceholder: string = 'Filter by Region'
  isSort: boolean = true
  checkpag: boolean = false
  pagenation: number = 1
  firstPage: number = 1
  count: number = 0
  arrayofPagination: any[] = []
  arrForPages:any[]=[]
  lang:boolean=false

  
  ngOnInit(): void {
    this._TransService.langAr.subscribe((langAr)=>{this.lang=langAr})
    this.cities = [
      { name: 'All' },
      { name: 'Europe' },
      { name: 'Americas' },
      { name: 'Africa' },
      { name: 'Asia' },
    ];
    this._CountriesService.getAllCountries().subscribe({
      next: (res) => {
        this.countriesApi=res
        // For sorting by populations
        this.countriesApi =this.countriesApi.sort((minPopulation, maxPopulation) => {
          return maxPopulation.population - minPopulation.population  ;
        })
        console.log("list all",  this.countriesApi);


        const chunkSize = 50; // Divide into 5 arr tow present each page
        this.arrayofPagination = [];
        for (let i = 0; i < this.countriesApi.length; i += chunkSize) {
          this.arrayofPagination.push(this.countriesApi.slice(i, i + chunkSize));
        }
        
        console.log("result",this.arrayofPagination);
        
      },
      error: (err) => {
        console.log(err);
      }
    })

  }
  selectRegion(e: any): void {
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

  
  goToPage(e:any):void{
    if (this.count==1) {
      for (let i = 0; i < this.arrForPages.length; i++) {
        this.arrForPages[i].classList.remove("btn-main")
        this.count=0
      }
    }
         this.count++
         const num=e.target.innerText
         const el=e.target
         this.arrForPages.push(el)
         console.log(this.arrForPages);
         this.countriesApi=this.arrayofPagination[num-1]
         el.classList.add("btn-main")
  }  
}
