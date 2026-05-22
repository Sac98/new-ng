import { Component } from '@angular/core';
import { map, Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-rxjs-basic',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-basic.component.html',
  styleUrl: './rxjs-basic.component.css'
})
export class RxjsBasicComponent {
  constructor() {
    const observable$:Observable<string> = new Observable((val:Subscriber<string>): void=> {
      val.next('Hello');
      val.next('World');
      val.error('Something went wrong');
      val.complete();
    })

    observable$.pipe(
      map((value) => {
        return value.toUpperCase();
      })
    ).subscribe((value) => {
      debugger;
      
      console.log('Obs Data', value);



    })

  }
}
