import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonResolveService } from './services/person-resolve.service';
import { AuthGuard } from '../guards';

const personRoutes: Routes = [
  {
    path: '',
    component: PersonComponent,
    children: [
      {
        path: 'person-list',
        component: PersonListComponent,
        resolve: {
          persons: PersonResolveService
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(personRoutes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
