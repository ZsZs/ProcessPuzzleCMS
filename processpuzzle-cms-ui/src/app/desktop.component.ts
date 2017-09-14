import { Component, Inject, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Response, Headers, RequestOptionsArgs } from '@angular/http';
import { IDynamicRemoteTemplateFactory } from 'ngx-dynamic-template';

import {Desktop} from './desktop-editor/desktop';
import {DesktopComponentFactory} from './desktop-editor/desktop-component-factory';
import {DynamicComponentDefinition} from './desktop-editor/dynamic-component-definition';
import {SmartDocumentComponent} from './content-editor/smart-document.component';

@Component({
  selector: 'pp-desktop',
  templateUrl: './desktop.component.html',
  styles: [``]
})

export class DesktopComponent implements OnInit {
  extraModules = [RouterModule, this.dynamicModule];
  public headerComponents = new Array<DynamicComponentDefinition>();
  public footerComponents = new Array<DynamicComponentDefinition>();
  isFooterVisible = false;

  constructor( private desktop: Desktop, private desktopComponentFactory: DesktopComponentFactory, @Inject('DynamicModule') public dynamicModule ) {}

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
   checkFooterVisibility() {
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

