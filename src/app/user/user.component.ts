import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  dummyUserData: any;

  constructor(private router: Router, private sharedDataService: SharedDataService) {
    this.dummyUserData = this.sharedDataService.getUserData();
  }

  validate() {
    // validation logic
// this.router.navigateByUrl("/structral-directive")
this.router.navigate(['/structral-directive'])

  }
}
