import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  apiData: any;
  constructor(private sharedDataService: SharedDataService) {
    this.sharedDataService.getUsers().subscribe((data) => {
      this.apiData = data;
    })

  }

}
