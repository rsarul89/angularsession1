import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../models/country';

const COUNTRIES: Country[] = [
  { countryId: 1, countryName: 'India', capital: 'New Delhi', currency: 'INR' },
  { countryId: 2, countryName: 'China', capital: 'Beijing', currency: 'RMB' }
];
let countryList$ = of(COUNTRIES);

@Injectable()
export class CountryService {

  constructor() { }

  getCountries(): Observable<Country[]> {
    return countryList$;
  }
}
