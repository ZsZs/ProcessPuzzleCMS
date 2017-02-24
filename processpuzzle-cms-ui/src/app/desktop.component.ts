import {Component, OnInit, Input} from '@angular/core';
import { NavigationBarService } from "./desktop-editor/navigation-bar/navigation-bar.service";
import {DynamicComponentModule} from "angular2-dynamic-component";

@Component({
  selector: 'app-desktop',
  template: `
    <template dynamic-component [componentModules]="desktopModules" [componentTemplate]='desktopTemplate'></template>
    `
})
export class DesktopComponent implements OnInit {
  @Input() desktopTemplate = `<DynamicComponent [componentTemplate]='"<span>Your desktop comes here...</span>"'></DynamicComponent>`;
  desktopModules = [DynamicComponentModule];

  constructor() { }

  ngOnInit() {
  }

}
