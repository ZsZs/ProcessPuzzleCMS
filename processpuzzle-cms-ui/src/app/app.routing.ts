import { Routes } from '@angular/router';
import { BreadCrumbEditorComponent } from './desktop-editor/bread-crumb/bread-crumb-editor.component';
import { FooterEditorComponent } from './desktop-editor/footer/footer-editor.component';
import { NavigationBarEditorComponent } from './desktop-editor/navigation-bar/navigation-bar-editor.component';

export const APP_ROUTES: Routes = [
   { path: '', redirectTo: '', pathMatch: 'full' },
   { path: 'desktop/breadcrumb', component: BreadCrumbEditorComponent },
   { path: 'desktop/footer', component: FooterEditorComponent },
   { path: 'desktop/navbar', component: NavigationBarEditorComponent }
];
