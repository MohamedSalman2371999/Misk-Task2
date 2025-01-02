import { inject, Injectable } from '@angular/core';
import { Icountry } from '../interfaces/icountry';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private readonly _HttpClient= inject(HttpClient)
  constructor() { }
  getAllCountries() :Observable<any> {
    return this._HttpClient.get(`https://restcountries.com/v3.1/all`)
  }
  getCountryByName(name:string) :Observable<any> {
    return this._HttpClient.get(`https://restcountries.com/v3.1/name/${name}`)
  }

  countries:Icountry[] = [
    {
      id:1,
      image:"./assets/images/Germany.png",
      name: "Germany",
      population: 81770900,
      region: "Europe",
      subRegion: "Western Europe",
      capital: "Berlin",
      topLevelDomain: [".de"],
      borderCountries: ["Austria", "Belgium", "Czech Republic", "Denmark", "France", "Luxembourg", "Netherlands", "Poland", "Switzerland"],
      currencies: ["Euro"],
      languages: ["German"]
    },
    {
      id:2,
      image:"./assets/images/American.png",
      name: "United States of America",
      population: 323947000,
      region: "Americas",
      subRegion: "Northern America",
      capital: "Washington, D.C.",
      topLevelDomain: [".us"],
      borderCountries: ["Canada", "Mexico"],
      currencies: ["United States Dollar"],
      languages: ["English"]
    },
    {
      id:3,
      image:"./assets/images/Brazil.webp",
      name: "Brazil",
      population: 206135893,
      region: "Americas",
      subRegion: "South America",
      capital: "Brasília",
      topLevelDomain: [".br"],
      borderCountries: ["Argentina", "Bolivia", "Colombia", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"],
      currencies: ["Brazilian Real"],
      languages: ["Portuguese"]
    },
    {
      id:4,
      image:"./assets/images/Iceland.webp",
      name: "Iceland",
      population: 334300,
      region: "Europe",
      subRegion: "Northern Europe",
      capital: "Reykjavík",
      topLevelDomain: [".is"],
      borderCountries: [],
      currencies: ["Icelandic Króna"],
      languages: ["Icelandic"]
    },
    {
      id:5,
      image:"./assets/images/Afghanistan.png",
      name: "Afghanistan",
      population: 27657145,
      region: "Asia",
      subRegion: "Southern Asia",
      capital: "Kabul",
      topLevelDomain: [".af"],
      borderCountries: ["China", "Iran", "Pakistan", "Tajikistan", "Turkmenistan", "Uzbekistan"],
      currencies: ["Afghan Afghani"],
      languages: ["Pashto", "Dari"]
    },
    {
      id:6,
      image:"./assets/images/Åland Islands.webp",
      name: "Åland Islands",
      population: 28875,
      region: "Europe",
      subRegion: "Northern Europe",
      capital: "Mariehamn",
      topLevelDomain: [".ax"],
      borderCountries: [],
      currencies: ["Euro"],
      languages: ["Swedish"]
    },
    {
      id:7,
      image:"./assets/images/Albania.png",
      name: "Albania",
      population: 2886026,
      region: "Europe",
      subRegion: "Southern Europe",
      capital: "Tirana",
      topLevelDomain: [".al"],
      borderCountries: ["Greece", "Kosovo", "Montenegro", "North Macedonia"],
      currencies: ["Albanian Lek"],
      languages: ["Albanian"]
    },
    {
      id:8,
      image:"./assets/images/Algeria.webp",
      name: "Algeria",
      population: 40400000,
      region: "Africa",
      subRegion: "Northern Africa",
      capital: "Algiers",
      topLevelDomain: [".dz"],
      borderCountries: ["Libya", "Mali", "Mauritania", "Morocco", "Niger", "Tunisia", "Western Sahara"],
      currencies: ["Algerian Dinar"],
      languages: ["Arabic", "Berber"]
    }
  ];


}
