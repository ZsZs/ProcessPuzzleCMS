import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NavigationBarService} from "./desktop-editor/navigation-bar/navigation-bar.service";

@Component({
  selector: 'app-desktop-editor',
  template: `
    <pp-navigation-bar></pp-navigation-bar>
    <router-outlet (desktopChanged)="onDesktopChanged($event)"></router-outlet>
    `,
  providers: [NavigationBarService]
})
export class DesktopEditorComponent implements OnInit {
   desktopTemplate = '';

   constructor() { }

   onDesktopChanged( desktopTemplate ){
      this.desktopTemplate = desktopTemplate;
   }

   ngOnInit() {
   }

}
