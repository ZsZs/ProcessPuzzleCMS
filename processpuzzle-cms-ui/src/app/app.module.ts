import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AngularFireModule } from 'angularfire2';

import { DynamicComponentModule, DynamicComponentModuleFactory } from 'angular2-dynamic-component/index';
import { MaterializeModule } from 'angular2-materialize';
import { ModalModule, DropdownModule } from "ng2-bootstrap";

import { AppComponent } from './app.component';
import { APP_ROUTES } from "./app.routing";
import { Desktop } from './desktop-editor/desktop';
import { DesktopComponent } from './desktop.component';
import { DesktopEditorComponent } from './desktop-editor.component';
import { DesktopEditorMenuComponent } from './desktop-editor/desktop-editor-menu.component';
import { NavigationBarComponent } from './desktop-editor/navigation-bar/navigation-bar.component';
import { NavigationBarEditorComponent } from './desktop-editor/navigation-bar/navigation-bar-editor.component';
import { BreadCrumbComponent } from './desktop-editor/bread-crumb/bread-crumb.component';
import { BreadCrumbEditorComponent } from './desktop-editor/bread-crumb/bread-crumb-editor.component';
import { IntroComponent } from './intro.component';
import { FooterComponent } from './desktop-editor/footer/footer.component';
import { FooterEditorComponent } from './desktop-editor/footer/footer-editor.component';
import { SmartDocumentComponent } from './content-editor/smart-document.component';
import { DesktopComponentFactory } from "./desktop-editor/desktop-component-factory";

export const firebaseConfig = {
  apiKey: "AIzaSyDkLfPmjbgBOVHsi3g75n2Is6PzX0J3ulk",
  authDomain: "processpuzzlecms-dev.firebaseapp.com",
  databaseURL: "https://processpuzzlecms-dev.firebaseio.com",
  storageBucket: "processpuzzlecms-dev.appspot.com",
  messagingSenderId: "676590811043"
};

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    DesktopEditorComponent,
    DesktopEditorMenuComponent,
    NavigationBarEditorComponent,
    NavigationBarComponent,
    BreadCrumbComponent,
    BreadCrumbEditorComponent,
    IntroComponent,
    FooterComponent,
    FooterEditorComponent,
    SmartDocumentComponent
  ],
  imports: [
    AngularFireModule.initializeApp( firebaseConfig ),
    BrowserModule,
    DropdownModule.forRoot(),
    DynamicComponentModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot( APP_ROUTES )
  ],
  providers: [Desktop],
  bootstrap: [AppComponent]
})
export class AppModule { }
