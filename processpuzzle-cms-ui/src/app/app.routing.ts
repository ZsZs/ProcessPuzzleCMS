import { Routes } from '@angular/router';
import { DesktopComponent } from './desktop.component';
import { NavigationBarFactoryComponent } from './desktop-editor/navigation-bar/navigation-bar-factory.component';

export const APP_ROUTES: Routes = [
   { path: '', redirectTo: '', pathMatch: 'full' },
   { path: 'desktop/breadcrumb', component: DesktopComponent },
   { path: 'desktop/navbar', component: NavigationBarFactoryComponent }
];
