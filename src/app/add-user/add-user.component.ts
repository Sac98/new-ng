import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CRUDService } from '../crud.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  addUserForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private crudService: CRUDService) {
    this.addUserForm = this.fb.group({
      name: [''],
      email: [''],
      phone: ['']
    })
  }

  addNewUser() {
    // console.log(this.addUserForm.value);
    this.crudService.postData(this.addUserForm.value).subscribe((response) => {
      console.log('User added:', response);

      this.router.navigate(['/crud']);
      alert('User added successfully');
    });
  }

  onCancel() {
    this.router.navigate(['/crud']);
  }
}
