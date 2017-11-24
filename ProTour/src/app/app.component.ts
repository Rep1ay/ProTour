import { Component } from '@angular/core';


export class Country{

  id: string;
  name : string;
  date: string;
  type : string;
  service : string;
  cena: number;

  
}



@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
selectedCount : Country;
onSelect(count: Country) {this.selectedCount = count;}
  title = 'Country ';

/**
 * countries = COUNETRIS
 */
public countries = COUNTRIES
}

var COUNTRIES: Country[] = [
  { 
    "id": "Port", 
    "name": "Portugal",
    "date": "22.12.2017",
    "type": "wypoczynek",
    "service": "All inclusive",
    "cena": 1200
    },

  {
     "id": "His",
   "name": "Hispania" ,
    "date": "21.12.2017",
    "type": "wypoczynek",
    "service": "All inclusive",
    "cena" : 1640
  },

  { 
    "id": "It",
    "name": "Italy",
    "date": "23.12.2017",
    "type": "wypoczynek",
    "service": "All inclusive",
    "cena": 1520
    },

  { 
    "id": "Fr", 
    "name": "France",
    "date": "21.12.2017",
    "type": "wypoczynek",
    "service": "All inclusive",
    "cena": 1840
   },

  {
     "id": "Ger",
    "name": "Germany",
    "date": "21.12.2017",
    "type": "wypoczynek",
    "service": "All inclusive",
    "cena": 1750
    },

  {
     "id": "Ua",
    "name": "Ukraine",
    "date": "21.12.2017",
    "type": "wypoczynek",
    "service": "All inclusive",
    "cena": 1600
     },

  {
     "id": "Ros", 
    "name": "Russia",
    "date": "21.12.2017",
    "type": "wypoczynek",
    "service": "All inclusive",
    "cena": 1520
     },

  {
    "id": "Bel", 
    "name": "Bellorussia",
    "date": "21.12.2017",
    "type": "wypoczynek",
    "service": "All inclusive",
    "cena": 1220
  },

];
