import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../crud.service';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CRUDComponent implements OnInit {
  userData: any;
  constructor(private crudService: CRUDService, private router: Router) { }

  ngOnInit(): void {
    this.crudService.getData().subscribe((data) => {
      console.log(data);
      this.userData = data;
    });
  }

  addNewUser() {
    this.router.navigateByUrl('/add-user');
  }
  viewUser(id: number) {
    // this.router.navigateByUrl('/view-user');
    this.router.navigate(['/view-user', id]);
  }
  updateUser(id: number) {
    // this.router.navigateByUrl(`/update-user/${id}`);
    this.router.navigate(['/update-user', id]);
  }
  deleteUser(id: number) {
    // this.router.navigateByUrl('/delete-user');
    this.router.navigate(['/delete-user', id]);

  }

  // addUser() {
  //   const newUser = {
  //     id: 5,
  //     name: 'New User',
  //     email: 'newuser@example.com',
  //     phone: '123-456-7890'
  //   };
  //   this.crudService.postData(newUser).subscribe((response) => {
  //     console.log('User added:', response);

  //   });
  // }
}
