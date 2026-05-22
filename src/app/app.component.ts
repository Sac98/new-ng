import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demong';
  listitems = ['item1', 'item2', 'item3', 'item4'];
  
}
