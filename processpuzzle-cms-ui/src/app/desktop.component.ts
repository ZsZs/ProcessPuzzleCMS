import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BreadCrumbComponent} from "./desktop-editor/bread-crumb/bread-crumb.component";
import {Desktop} from './desktop-editor/desktop';
import {NavigationBarComponent} from "./desktop-editor/navigation-bar/navigation-bar.component";
import {DesktopComponentFactory} from "./desktop-editor/desktop-component-factory";
import {DynamicComponentDefinition} from "./desktop-editor/dynamic-component-definition";
import {DynamicComponentModule} from "angular2-dynamic-component";
import {SmartDocumentComponent} from './content-editor/smart-document.component';

@Component({
  selector: 'pp-desktop',
  template: `
    <header>
        <ng-template dynamic-component [componentModules]="extraModules" *ngFor="let component of headerComponents" [componentType]="component.type" [componentContext]="component.context"></ng-template>
    </header>
    <main>
        <router-outlet></router-outlet>
    </main>
    <footer [ngClass]="{'page-footer': isFooterVisible }">
        <ng-template dynamic-component [componentModules]="extraModules" *ngFor="let component of footerComponents" [componentType]="component.type" [componentContext]="component.context"></ng-template>
    </footer>
  `,
   styles: [``]
})

export class DesktopComponent implements OnInit {
  extraModules = [DynamicComponentModule, RouterModule];
  private headerComponents = new Array<DynamicComponentDefinition>();
  private footerComponents = new Array<DynamicComponentDefinition>();
  isFooterVisible = false;

  constructor( private desktop: Desktop, private desktopComponentFactory: DesktopComponentFactory ) {}

  ngOnInit() {
    this.desktop.watchDesktopChange().subscribe(
       ( ) => {
         this.headerComponents = this.desktopComponentFactory.generateHeaderComponents( this.desktop );
         this.footerComponents = this.desktopComponentFactory.generateFooterComponents( this.desktop );
         this.checkFooterVisibility();
       }
    )
  }

  // protected, private helper methods
   checkFooterVisibility(){
     this.isFooterVisible = this.footerComponents.length > 0;
   }
}

export const DESKTOP_ROUTES: Routes = [
   { path: '', redirectTo: '', pathMatch: 'full' },
   { path: 'content', component: DesktopComponent,
      children: [
         { path: 'home', component: SmartDocumentComponent },
         { path: 'child-one', component: SmartDocumentComponent },
         { path: 'child-two', component: SmartDocumentComponent }
      ]}
];

