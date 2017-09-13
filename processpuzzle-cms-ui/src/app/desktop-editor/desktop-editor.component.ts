import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NavigationBarService } from './navigation-bar/navigation-bar.service';
import { DesktopEditorMenuComponent } from './desktop-editor-menu.component';
import { Subject } from 'rxjs/Subject';

@Component( {
   selector: 'pp-desktop-editor',
   template: `
       <pp-intro (onShowEditor)="showEditor( $event )"></pp-intro>
       <pp-desktop-editor-menu></pp-desktop-editor-menu>
       <router-outlet (desktopChanged)="onDesktopChanged($event)"></router-outlet>
   `,
   providers: [ NavigationBarService ]
} )
export class DesktopEditorComponent implements OnInit {
   desktopTemplate = '';
   @ViewChild( DesktopEditorMenuComponent ) desktopEditor: DesktopEditorMenuComponent;

   // constructors
   constructor() {
   }

   // public accessors and mutators
   showEditor( isVisible: boolean ) {
      this.desktopEditor.showEditor();
   }

   // event handling methods
   ngOnInit() {
   }

   onDesktopChanged( desktopTemplate ) {
      this.desktopTemplate = desktopTemplate;
   }

}
