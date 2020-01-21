/*
 * Main application component. Renders the top-level layout and its individual
 * subcomponents.
 * 
 * This is also the only "smart component" in this application. We only subscribe
 * to @ngrx/store here, and also only dispatch actions to @ngrx/store here.
 * Other components are stateless and know nothing about the store.
 */
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'hs-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  partials$: Observable<Number[]>;

  constructor() {
    this.partials$ = of([1,2,3,4,5,6,7])

  }


}