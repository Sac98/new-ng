import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CRUDService } from '../crud.service';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.css'
})
export class DeleteUserComponent {
  userID: {
    uid: number;
  };
  constructor(private route: ActivatedRoute, private crudService: CRUDService, private router: Router) {
    this.userID = {
      uid: 0
    }
  }
  ngOnInit(): void {
    this.userID.uid = this.route.snapshot.params['id'];
    console.log('User ID to delete:', this.userID.uid);
    this.crudService.deleteDataById(this.userID.uid).subscribe(() => {
      console.log('User deleted successfully', this.userID.uid);
      this.router.navigate(['/crud']);
    });
  }

}
