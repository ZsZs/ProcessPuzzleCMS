import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar.component';
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "./app.routing";
import { ModalModule, DropdownModule } from "ng2-bootstrap";
import { DesktopComponent } from './desktop.component';
import { DesktopEditorComponent } from './desktop-editor.component';
import { NavigationBarFactoryComponent } from './desktop-editor/navigation-bar/navigation-bar-factory.component';
import { DynamicComponentModule } from 'angular2-dynamic-component/index';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    DesktopEditorComponent,
    NavigationBarComponent,
    NavigationBarFactoryComponent
  ],
  imports: [
    BrowserModule,
    DropdownModule.forRoot(),
    DynamicComponentModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    RouterModule.forRoot( APP_ROUTES )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
