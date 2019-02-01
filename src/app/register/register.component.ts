import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  langs: string[] = ["English", "French", "German"];
  registerForm: FormGroup;
  submitted = false;
  // firstName: FormControl;
  // lastName: FormControl;
  // email: FormControl;
  // password: FormControl;
  // language: FormControl;

  constructor(private formBuilder: FormBuilder) { }

  // createFormControls() {
  //   this.firstName = new FormControl("", Validators.required);
  //   this.lastName = new FormControl("", Validators.required);
  //   this.email = new FormControl("", [
  //     Validators.required,
  //     Validators.pattern("[^ @]*@[^ @]*")
  //   ]);
  //   this.password = new FormControl("", [
  //     Validators.required,
  //     Validators.minLength(8)
  //   ]);
  //   this.language = new FormControl("", Validators.required);
  // }

  createForm() {
    this.registerForm = this.formBuilder.group({
      name: this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required]
      }),
      email: ['', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      language: ['', Validators.required]
    });

    // this.myform = new FormGroup({
    //   name: new FormGroup({
    //     firstName: this.firstName,
    //     lastName: this.lastName
    //   }),
    //   email: this.email,
    //   password: this.password,
    //   language: this.language
    // });
  }

  ngOnInit() {
    //this.createFormControls();
    this.createForm();
  }

  onSubmit() {
     this.submitted = true;
    if (this.registerForm.valid) {
      console.log("Form Submitted!");
      console.log(this.registerForm.value);
      this.registerForm.reset();
    }
  }
}
