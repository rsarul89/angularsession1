import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent, HomeComponent, PageNotFoundComponent, SharedModule, AppRoutingModule, UiModule } from './index';
import { environment } from '../environments/environment';
import { SqrtPipe } from './sqrt.pipe';
import { CountPipe } from './count.pipe';
import { TruncatePipe } from './limit-to.pipe';
import { FilterPipe } from './filter.pipe';
import { SearchFilterPipe } from './search.filter.pipe';
import { LifeCycleComponentComponent } from './life-cycle-component.component';
import { RegisterComponent } from './register/register.component';
import { FormbuliderComponent } from './formbulider.component';
import { DynamicFormControlComponent } from './dynamic-form-control.component';
import { FacetFilterComponent } from './facet-filter.component';
import { FacetFilter2Component } from './facet-filter2.component';
import { Filter2Pipe } from './filter2.pipe';
import { ApiService } from './shared/api.service';
import { CONSTANTS } from "./shared/app.constants";
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    SqrtPipe,
    CountPipe,
    TruncatePipe,
    FilterPipe,
    SearchFilterPipe,
    LifeCycleComponentComponent,
    RegisterComponent,
    FormbuliderComponent,
    DynamicFormControlComponent,
    FacetFilterComponent,
    FacetFilter2Component,
    Filter2Pipe,
    UserComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    AppRoutingModule,
    UiModule
  ],
  providers: [
    { provide: CONSTANTS.appGenericServiceInjectorKey, useClass: ApiService },
    { provide: CONSTANTS.appBaseURLInjectorKey, useValue: environment.apiRoot }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('AppModule loaded.');
  }
}
