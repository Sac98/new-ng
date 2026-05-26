import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';

@Component({
  selector: 'reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  reactiveForm: FormGroup
  constructor(private fb: FormBuilder) {
    // Using FormControl and FormGroup
    // this.reactiveForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl(''),
    //   email: new FormControl(''),
    //   password: new FormControl(),
    //   check: new FormControl(true),
    //   address: new FormGroup({
    //     city: new FormControl(),
    //     street: new FormControl(),
    //     pincode: new FormControl()
    //   })
    // })

    // Using FormBuilder
    this.reactiveForm = fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      check: [true],
      address: fb.group({
        city: [''],
        street: [''],
        pincode: ['']
      })
    })
  }
  onSubmit() {
    console.log(this.reactiveForm.value);
  }
  onReset() {
    this.reactiveForm.reset();
  }
  setAllValues() {
    let userObject = {
      firstName: "rahul",
      lastName: "verma",
      email: "rahul.verma@example.com",
      password: "password123",
      check: true,
      address: {
        city: "New York",
        street: "123 Main St",
        pincode: "10001"
      }
    };
    this.reactiveForm.setValue(userObject);
    console.log(this.reactiveForm.value);

  }
}
