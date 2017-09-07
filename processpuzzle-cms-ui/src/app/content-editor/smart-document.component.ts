import {Component, OnInit, AfterContentInit, AfterViewChecked} from '@angular/core';
import {Desktop} from '../desktop-editor/desktop';
import {DynamicComponentModule} from 'angular2-dynamic-component';
import {SmartDocumentService} from './smart-document.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {SmartDocument} from './smart-document';
import {ContentEditor} from './content-editor';

@Component({
   selector: 'pp-smart-document',
   template: `
    <div [hidden]="isVisible">
        <ng-template dynamic-component [componentModules]="extraModules" [componentTemplate]="extraTemplate" (dynamicComponentReady)="documentIsLoaded($event)"></ng-template>
    </div>`,
   providers: [ContentEditor]
})

export class SmartDocumentComponent implements AfterViewChecked, OnDestroy, OnInit {
   document: SmartDocument;
   documentName: string;
   extraTemplate: string;
   extraModules = [DynamicComponentModule];
   isVisible: boolean;
   routeSubscription: Subscription;

   constructor(private contentEditor: ContentEditor, private route: ActivatedRoute, private desktop: Desktop, private documentService: SmartDocumentService) {
   }

   // public accessors and mutators
   contentChanged(content: string) {
      this.saveContent(content);
   }

   documentIsLoaded(scope: any) {
      this.contentEditor = new ContentEditor();
      this.contentEditor.initialize();
      this.contentEditor.watchContentChange().subscribe(
         (content: string) => {
            this.saveContent(content);
         }
      )
   }

   ngAfterViewChecked() {
   }

   ngOnDestroy() {
      this.routeSubscription.unsubscribe();
   }

   ngOnInit() {
      this.verifyifVisible();
      this.routeSubscription = this.route.url.subscribe(
         (url: any) => {
            this.documentName = url;
            this.documentService.loadDocument(this.documentName).subscribe(
               (response) => {
                  this.document = response;
                  const templateContent = this.document.template;
                  this.extraTemplate = `<div data-editable data-name="${this.documentName}">${templateContent}</div>`;
               }
            );
         }
      );
   }

   // protected, private helper mehtods
   private saveContent(content: string) {
      this.document.updateContent(content);
      this.documentService.saveDocument(this.document).subscribe(
         ( response ) => {
            this.document.id = response.id;
         }
      );
   }

   private subscribeToDesktopChange() {
      this.desktop.watchDesktopChange().subscribe(
         () => {
            this.verifyifVisible();
         }
      )
   }

   private verifyifVisible() {
      this.isVisible = !this.desktop.hasElements();
   }
}
