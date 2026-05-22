import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tdf',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent implements OnInit {
  [x: string]: any;
  userObject: User = {}

  submit(data: NgForm) {
    // console.log(data.value);
    alert(JSON.stringify(data.value))

  }

  ngOnInit(): void {
    // this.userObject = {
    //   firstName: "rahul",
    //   lastName: "verma",
    //   email: "r@gmail.com",
    //   password: "1234",
    //   check: true
    // }
  }

  setValues(userForm: NgForm) {
    let userObject = {
      firstname: "rahul",
      lastname: "verma",
      email: "r@gmail.com",
      password: "1234",
      check: true

    }
    userForm.setValue(userObject)

  }
  resetValues(userForm:NgForm){
    userForm.reset()
    }

}
