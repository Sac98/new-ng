import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';

@Component({
  selector: 'reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  reactiveForm: FormGroup
  constructor() {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(),
      check: new FormControl(true),
      address: new FormGroup({
        city: new FormControl(),
        street: new FormControl(),
        pincode: new FormControl()
      })
    })
  }
  onSubmit() {
    console.log(this.reactiveForm.value);
  }
}
