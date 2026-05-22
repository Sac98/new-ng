import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  name: string = 'Learn Angular'
  date: Date = new Date()
  person = {
    age: 25,
    name: 'sachin',
    addr: 'BK'
  }

}
