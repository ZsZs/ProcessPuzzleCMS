import {Component, ViewChild} from '@angular/core';
import {IntroComponent} from "./intro.component";
import {DesktopEditorComponent} from "./desktop-editor.component";
import {DesktopEditorMenuComponent} from "./desktop-editor/desktop-editor-menu.component";
import {DesktopComponent} from "./desktop.component";

@Component({
  selector: 'pp-root',
  template: `
    <pp-desktop-editor></pp-desktop-editor>
    <pp-desktop></pp-desktop>
  `
})

export class AppComponent {
}
