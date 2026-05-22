import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private router: Router) { }
  validate() {
    // validation logic
// this.router.navigateByUrl("/structral-directive")
this.router.navigate(['/structral-directive'])

  }
}
