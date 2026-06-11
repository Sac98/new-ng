import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CRUDService } from '../crud.service';
import { firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent implements OnInit {
  userID: {
    uid: number;
  }
  userData: any;
  constructor(private route: ActivatedRoute, private crudService: CRUDService, private router: Router) {
    this.userID = {
      uid: this.route.snapshot.params['id']
    }
  }

  async ngOnInit(): Promise<void> {
    try {
      const data = await firstValueFrom(this.crudService.getDataById(this.userID.uid));
      console.log(' User Data by ID', data);
      this.userData = data;
    } catch (error) {
      console.error('Error loading user data', error);
    }
  }
  goBack() {
    this.router.navigate(['/crud']);
  }
}
