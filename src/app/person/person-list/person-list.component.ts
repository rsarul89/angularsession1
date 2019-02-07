import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
//import { PersonService } from '../services/person.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons$: any;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.persons$ = this.route.snapshot.data;
    //this.persons$ = this.personService.getPersons();
  }
}
