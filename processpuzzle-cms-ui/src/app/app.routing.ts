import { Routes } from '@angular/router';
import { BreadCrumbEditorComponent } from './desktop-editor/bread-crumb/bread-crumb-editor.component';
import { DesktopComponent } from './desktop.component'
import { DesktopEditorComponent } from './desktop-editor.component'
import { FooterEditorComponent } from './desktop-editor/footer/footer-editor.component';
import { NavigationBarEditorComponent } from './desktop-editor/navigation-bar/navigation-bar-editor.component';
import { SmartDocumentComponent } from './content-editor/smart-document.component';

export const APP_ROUTES: Routes = [
   { path: '', redirectTo: '', pathMatch: 'full' },
   { path: 'content', component: DesktopComponent,
      children: [
         { path: 'home', component: SmartDocumentComponent },
         { path: '**', component: SmartDocumentComponent }
      ]},
   { path: 'desktop', component: DesktopEditorComponent,
      children: [
         { path: 'breadcrumb', component: BreadCrumbEditorComponent },
         { path: 'footer', component: FooterEditorComponent },
         { path: 'navbar', component: NavigationBarEditorComponent }
      ]},
];
