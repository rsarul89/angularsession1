import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CountryService } from '../services/country.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries$: Observable<Country[]>;
  constructor(private countryService: CountryService) { }
  ngOnInit() {
    this.countries$ = this.countryService.getCountries();
  }
}
