import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent, HomeComponent, PageNotFoundComponent, SharedModule, AppRoutingModule, UiModule } from './index';
import { SqrtPipe } from './sqrt.pipe';
import { LifeCycleComponentComponent } from './life-cycle-component.component';
import { RegisterComponent } from './register/register.component';
import { FormbuliderComponent } from './formbulider.component';
import { DynamicFormControlComponent } from './dynamic-form-control.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    SqrtPipe,
    LifeCycleComponentComponent,
    RegisterComponent,
    FormbuliderComponent,
    DynamicFormControlComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    AppRoutingModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('AppModule loaded.');
  }
}
