import {Component, ViewChild} from '@angular/core';
import {IntroComponent} from './intro.component';
import {DesktopEditorComponent} from './desktop-editor.component';
import {DesktopEditorMenuComponent} from './desktop-editor/desktop-editor-menu.component';
import {DesktopComponent} from './desktop.component';
import {DesktopComponentFactory} from './desktop-editor/desktop-component-factory';
import {SmartDocumentService} from './content-editor/smart-document.service';

@Component({
  selector: 'pp-root',
  template: `
    <pp-desktop-editor></pp-desktop-editor>
    <pp-desktop></pp-desktop>
  `,
  styles: [` pp-desktop { display: flex; min-height: 100vh; flex-direction: column; }`, `main { flex: 1 0 auto; }`],
  providers: [DesktopComponentFactory, SmartDocumentService]
})

export class AppComponent {
}
