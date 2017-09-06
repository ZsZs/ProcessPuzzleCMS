import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import * as firebase from 'firebase/app'; // Do not import from 'firebase' as you'd lose the tree shaking benefits

import { DynamicComponentModule, DynamicComponentModuleFactory } from 'angular2-dynamic-component/index';
import { MaterializeModule } from 'angular2-materialize';
import { ModalModule, BsDropdownModule } from "ng2-bootstrap";

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
    AngularFireModule.initializeApp( environment.firebaseConfig, 'pp-root'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
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
