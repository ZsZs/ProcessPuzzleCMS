import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import {Desktop} from "./desktop-editor/desktop";
import {BreadCrumbComponent} from "./desktop-editor/bread-crumb/bread-crumb.component";
import {NavigationBarComponent} from "./desktop-editor/navigation-bar/navigation-bar.component";
import {DesktopComponentFactory} from "./desktop-editor/desktop-component-factory";
import {DynamicComponentDefinition} from "./desktop-editor/dynamic-component-definition";
import {DynamicComponentModule} from "angular2-dynamic-component";

@Component({
  selector: 'pp-desktop',
  template: `
    <template dynamic-component [componentModules]="extraModules" [componentTemplate]='extraTemplate'></template>
    <template dynamic-component *ngFor="let component of desktopComponents" [componentType]="component.type" [componentContext]="component.context"></template>`,
  providers: [DesktopComponentFactory]
})

export class DesktopComponent implements OnInit {
  extraTemplate = `<DynamicComponent [componentTemplate]='""'></DynamicComponent>`;
  extraModules = [DynamicComponentModule];

  private desktopComponents = new Array<DynamicComponentDefinition>();

  constructor( private desktop: Desktop, private desktopComponentFactory: DesktopComponentFactory ) {}

  ngOnInit() {
    this.desktop.watchDesktopChange().subscribe(
       ( ) => {
         this.desktopComponents = this.desktopComponentFactory.generateDesktopComponents( this.desktop );
       }
    )
  }
}
