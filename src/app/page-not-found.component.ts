import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  template: `
    <h2>Page Not Found.</h2>
    <div>
      <button class="btn btn-md btn-info mr-l-10" (click)="goBack()">Go Back</button>
		</div>
  `
})
export class PageNotFoundComponent {
  constructor(private location: Location) { }
  goBack(): void {
    this.location.back();
  }
}
