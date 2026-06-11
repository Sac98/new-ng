import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../iuser';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit {

  updateUserForm: FormGroup;
  userID: {
    uid: number;
  }
  userData: IUser

  constructor(private crudService: CRUDService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.userData = {} as IUser;
    this.updateUserForm = this.fb.group({
      id: [''],
      name: [''],
      email: [''],
      phone: ['']
    })

    this.userID = {
      uid: this.route.snapshot.params['id']
    }
  }

  async ngOnInit(): Promise<void> {
    try {
      const data = await firstValueFrom(this.crudService.getDataById(this.userID.uid));
      console.log(' User Data by ID', data);
      this.userData = data;

      this.updateUserForm.setValue({
        id: this.userData.id,
        name: this.userData.name,
        email: this.userData.email,
        phone: this.userData.phone
      });
    } catch (error) {
      console.error('Error loading user data', error);
    }
  }

  onSubmit() {
    if (this.updateUserForm.valid) {
      const updatedUser: IUser = this.updateUserForm.value;
      console.log('Updated User Data', updatedUser);
      this.crudService.putDataById(this.userID.uid, updatedUser).subscribe((response) => {
        console.log('User updated successfully', response);
        this.router.navigate(['/crud']);
      });
    }
  }

  onCancel() {
    this.router.navigate(['/crud']);
  }


}
