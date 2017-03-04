import { Component, OnInit } from '@angular/core';
import { Desktop } from "../desktop-editor/desktop";
import {DynamicComponentModule} from "angular2-dynamic-component";
import {SmartDocumentService} from "./smart-document.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {SmartDocument} from "./smart-document";

@Component({
  selector: 'pp-smart-document',
  template: `
    <div [hidden]="isVisible">
        <template dynamic-component [componentModules]="extraModules" [componentTemplate]='extraTemplate'></template>
    </div>`
})

export class SmartDocumentComponent implements OnInit {
  document: SmartDocument;
  documentName: string;
  extraTemplate: string;
  extraModules = [DynamicComponentModule];
  isVisible: boolean;
  routeSubscription: Subscription;

  constructor( private route: ActivatedRoute, private desktop: Desktop, private documentService: SmartDocumentService ) { }

  // public accessors and mutators
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  ngOnInit() {
    this.verifyifVisible();
    this.routeSubscription = this.route.url.subscribe(
       ( url: any ) => {
         this.documentName = url;
         this.document = this.documentService.loadDocument( this.documentName );
         const templateContent = this.document.template;
         this.extraTemplate = `<DynamicComponent [componentTemplate]='"${templateContent}"'></DynamicComponent>`;
       }
    );
  }

  // protected, private helper mehtods
  private verifyifVisible() {
    this.isVisible = !this.desktop.hasElements();
  }

  private subscribeToDesktopChange(){
    this.desktop.watchDesktopChange().subscribe(
       () => {
         this.verifyifVisible();
       }
    )
  }
}
