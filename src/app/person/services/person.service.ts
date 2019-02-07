import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";
import { Person } from '../models/person';

const PERSONS: Person[] = [
  { personId: 1, name: 'Mahesh', city: 'Varanasi' },
  { personId: 2, name: 'Ram', city: 'Ayodhya' },
  { personId: 3, name: 'Kishna', city: 'Mathura' }
];
let personList$ = of(PERSONS);

@Injectable()
export class PersonService {

  constructor() { }

  getPersons(): Observable<Person[]> {
    //return personList$.pipe(delay(3000));
     return personList$;
    //return of([]);
  }
}
