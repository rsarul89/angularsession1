import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.css']
})
export class DynamicFormControlComponent implements OnInit {

  form: FormGroup;
  orders = [
    { id: 100, name: 'order 1' },
    { id: 200, name: 'order 2' },
    { id: 300, name: 'order 3' },
    { id: 400, name: 'order 4' }
  ];

  orderForm: FormGroup;
  items: FormArray;

  constructor(private formBuilder: FormBuilder) {
    // Create a new array with a form control for each order
    const controls = this.orders.map(c => new FormControl(false));
    controls[0].setValue(true); // Set the first checkbox to true (checked)

    this.form = this.formBuilder.group({
      orders: new FormArray(controls, this.minSelectedCheckboxes(1))
    });
  }

  submit() {
    const selectedOrderIds = this.form.value.orders
      .map((v, i) => v ? this.orders[i].id : null)
      .filter(v => v !== null);

    console.log(selectedOrderIds);
  }

  minSelectedCheckboxes(min = 1) {
    const validator: ValidatorFn = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        // get a list of checkbox values (boolean)
        .map(control => control.value)
        // total up the number of checked checkboxes
        .reduce((prev, next) => next ? prev + next : prev, 0);


      // if the total is not greater than the minimum, return the error message
      return totalSelected >= min ? null : { required: true };
    };

    return validator;
  }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      customerName: '',
      email: '',
      items: this.formBuilder.array([this.createItem()])
    });
    this.formControlValueChanged();
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  submit1() {
    console.log(this.orderForm.value);
  }

  deleteOrderItem(index) {
    this.orderItems.removeAt(index);
  }
  formControlValueChanged() {
    this.orderItems.valueChanges.subscribe(
      data => {
        console.log('favoriteLocations: ' + data);
      }
    );
    this.orderItems.statusChanges.subscribe(
      status => {
        console.log('orderItems validation status: ' + status);
      }
    );
  }
  get orderItems(): FormArray {
    return this.orderForm.get('items') as FormArray;
  }

}
