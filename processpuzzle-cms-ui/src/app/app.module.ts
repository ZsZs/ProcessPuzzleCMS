// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Third party components
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DynamicComponentModule } from 'angular2-dynamic-component/index';
import { MaterializeModule } from 'angular2-materialize';
import { ModalModule, BsDropdownModule } from 'ng2-bootstrap';

// ProcessPuzzle components
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routing';
import { BreadCrumbComponent } from './desktop-editor/bread-crumb/bread-crumb.component';
import { BreadCrumbEditorComponent } from './desktop-editor/bread-crumb/bread-crumb-editor.component';
import { Desktop } from './desktop-editor/desktop';
import { DesktopComponent } from './desktop.component';
import { DesktopEditorComponent } from './desktop-editor/desktop-editor.component';
import { DesktopEditorMenuComponent } from './desktop-editor/desktop-editor-menu.component';
import { FooterComponent } from './desktop-editor/footer/footer.component';
import { FooterEditorComponent } from './desktop-editor/footer/footer-editor.component';
import { environment } from '../environments/environment';
import { HttpLoggingInterceptor } from './utility/http-logging';
import { IntroComponent } from './intro.component';
import { NavigationBarComponent } from './desktop-editor/navigation-bar/navigation-bar.component';
import { NavigationBarEditorComponent } from './desktop-editor/navigation-bar/navigation-bar-editor.component';
import { SmartDocumentComponent } from './content-editor/smart-document.component';

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
    HttpClientModule,
    MaterializeModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot( APP_ROUTES )
  ],
  providers: [Desktop, {provide: HTTP_INTERCEPTORS, useClass: HttpLoggingInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
