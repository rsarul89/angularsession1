import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  display = true;
  Course = 'TypeScript';
  ngAfterViewInit() {
    //$('#mainContainer').append('<p>test</p>');
  }
}
