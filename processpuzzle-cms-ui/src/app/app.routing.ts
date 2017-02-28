import { Routes } from '@angular/router';
import { DesktopComponent } from './desktop.component';
import { BreadCrumbEditorComponent } from './desktop-editor/bread-crumb/bread-crumb-editor.component';
import { NavigationBarEditorComponent } from './desktop-editor/navigation-bar/navigation-bar-editor.component';

export const APP_ROUTES: Routes = [
   { path: '', redirectTo: '', pathMatch: 'full' },
   { path: 'desktop/breadcrumb', component: BreadCrumbEditorComponent },
   { path: 'desktop/navbar', component: NavigationBarEditorComponent }
];
