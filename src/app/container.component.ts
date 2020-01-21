/*
 * Main application component. Renders the top-level layout and its individual
 * subcomponents.
 * 
 * This is also the only "smart component" in this application. We only subscribe
 * to @ngrx/store here, and also only dispatch actions to @ngrx/store here.
 * Other components are stateless and know nothing about the store.
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'hs-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  @Input() partials: Number[];
  
  
  // ngFor tracking function for partials. We have a constant number so we can
  // just track by index.
  trackPartial(index: number) { 
    return index;
  }

}