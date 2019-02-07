import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { CustomPreloadingWithDelayStrategy } from './custom-preloading-with-delay-strategy';
import { HomeComponent } from './home/home.component';
import { LifeCycleComponentComponent } from './life-cycle-component.component';
import { RegisterComponent } from './register/register.component';
import { FormbuliderComponent } from './formbulider.component';
import { DynamicFormControlComponent } from './dynamic-form-control.component';
import { AuthGuard } from './guards';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'lifecycle',
    component: LifeCycleComponentComponent
  },
  {
    path: 'form-builder',
    component: FormbuliderComponent
  },
  {
    path: 'dyn-form',
    component: DynamicFormControlComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'country',
    loadChildren: './country/country.module#CountryModule',
    data: { preload: true, delay: false, delayDuration: 0 },
    canActivate: [AuthGuard]
  },
  {
    path: 'person',
    loadChildren: './person/person.module#PersonModule',
    data: { preload: true, delay: true, delayDuration: 2000 },
    canActivate: [AuthGuard]
  },
  {
    path: 'address',
    loadChildren: './address/address.module#AddressModule',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
  // },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingWithDelayStrategy })],
  exports: [RouterModule],
  providers: [CustomPreloadingWithDelayStrategy]
})
export class AppRoutingModule { }
