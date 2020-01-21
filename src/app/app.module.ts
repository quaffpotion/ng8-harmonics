import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ContainerComponent} from './container.component'
import { CurveComponent} from './curve.component'
import { PartialComponent } from "./partial.component";
import { TotalComponent } from "./total.component";

@NgModule({
  declarations: [
    AppComponent, ContainerComponent, CurveComponent, PartialComponent, TotalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
