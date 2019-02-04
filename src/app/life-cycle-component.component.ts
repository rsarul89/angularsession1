import {
  Component, OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-component',
  templateUrl: './life-cycle-component.component.html',
  styleUrls: ['./life-cycle-component.component.css']
})
export class LifeCycleComponentComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  data: number = 100;

  constructor() {
    console.log(`new - data is ${this.data}`);
  }

  ngOnChanges() {
    console.log(this.data);
    console.log(`ngOnChanges - data is ${this.data}`);
  }

  ngOnInit() {
    console.log(this.data);
    console.log(`ngOnInit  - data is ${this.data}`);
  }

  ngDoCheck() {
    console.clear();
    console.log(this.data);
    console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    console.log(this.data);
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log(this.data);
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log(this.data);
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log(this.data);
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log(this.data);
    console.log("ngOnDestroy");
  }

  fnAddNumber(): void {
    this.data += 100;
  }

  deleteNumber(): void {
    this.data -= 10;
  }
}
