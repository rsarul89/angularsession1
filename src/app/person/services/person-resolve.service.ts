import { Injectable, OnDestroy } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PersonService } from '../services/person.service';
import { Person } from '../models/person';

@Injectable()
export class PersonResolveService implements Resolve<Person[]>, OnDestroy {
  private persons: Person[];
  subscription: Subscription;
  constructor(private personService: PersonService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Person[] | Observable<Person[]> | Promise<Person[]> {
    this.subscription = this.personService.getPersons().subscribe(persons => {
      this.persons = persons;
    });
    if (this.persons && this.persons.length <= 0) {
      this.router.navigate(['/country'], { queryParams: { returnUrl: state.url } });
      return null;
    }
    return this.persons;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
