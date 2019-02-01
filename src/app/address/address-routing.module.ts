import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent }  from './address.component';
import { AuthGuard } from '../guards';

const addressRoutes: Routes = [
	{ 
	  path: '',
    component: AddressComponent
	}  
];

@NgModule({
  imports: [ RouterModule.forChild(addressRoutes) ],
  exports: [ RouterModule ]
})
export class AddressRoutingModule { }