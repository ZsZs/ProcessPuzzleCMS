import { Component } from '@angular/core';
import {DynamicComponentModule} from "angular2-dynamic-component";

@Component({
  selector: 'pp-root',
  template: `
    <app-desktop-editor (desktopChanged)="onDesktopChanged($event)"></app-desktop-editor>
    <app-desktop [desktopTemplate]="desktopTemplate"></app-desktop>
    `
})

export class AppComponent {
  desktopTemplate = '';

  onDesktopChanged( desktopTemplate ){
    this.desktopTemplate = desktopTemplate;
  }
}
