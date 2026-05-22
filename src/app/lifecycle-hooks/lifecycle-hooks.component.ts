import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css'
})
export class LifecycleHooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  constructor() {
    // used for init class props and injecting dependencies
    console.log('constructor called');

  }
  ngOnInit() {
    // used for api calls
    console.log('On init called');

  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
  }
  ngDoCheck(): void {
    // used for change detection
    // throw new Error('Method not implemented.');
    console.log('ngdocheck called');

  }
  ngAfterContentInit(): void {
    // used for ng-content
    // throw new Error('Method not implemented.');
    console.log('contentinit called');

  }
  ngAfterContentChecked(): void {
    // ng-content for childs has been checked
    // throw new Error('Method not implemented.');
    console.log('content checked called');

  }
  ngAfterViewInit(): void {
    // used for view child
    // throw new Error('Method not implemented.');
    console.log('view init called');

  }
  ngAfterViewChecked(): void {
    // view has been checked
    // throw new Error('Method not implemented.');
    console.log('view checked called');

  }
  ngOnDestroy(): void {
    // component is destroyed
    // throw new Error('Method not implemented.');
    console.log('ondestroy called');

  }

}
