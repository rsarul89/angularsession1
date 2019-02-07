import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbulider',
  templateUrl: './formbulider.component.html',
  styleUrls: ['./formbulider.component.css']
})
export class FormbuliderComponent implements OnInit {
  emailPattern : string = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }
  // convenience getter for easy access to form fields
  get f() { return this.myForm.controls; }
  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      message: ['', [Validators.required, Validators.minLength(15)]]
    });
  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }
}
