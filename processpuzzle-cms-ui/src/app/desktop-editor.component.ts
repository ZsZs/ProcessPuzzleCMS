import {Component, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import {NavigationBarService} from './desktop-editor/navigation-bar/navigation-bar.service';
import {DesktopEditorMenuComponent} from './desktop-editor/desktop-editor-menu.component';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'pp-desktop-editor',
  template: `
        <pp-desktop-editor-menu></pp-desktop-editor-menu>
        <pp-intro (onShowEditor)="showEditor( $event )"></pp-intro>
        <router-outlet (desktopChanged)="onDesktopChanged($event)"></router-outlet>
    `,
  providers: [NavigationBarService]
})
export class DesktopEditorComponent implements OnInit {
   desktopTemplate = '';
   @ViewChild( DesktopEditorMenuComponent ) desktopEditor: DesktopEditorMenuComponent;

   // constructors
   constructor() { }

   // public accessors and mutators
   onDesktopChanged( desktopTemplate ) {
      this.desktopTemplate = desktopTemplate;
   }

   showEditor( isVisible: boolean ) {
      this.desktopEditor.showEditor();
   }

   ngOnInit() {
   }
}
