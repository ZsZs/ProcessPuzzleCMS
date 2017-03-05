/**
 * Created by Zsolt on 8/11/2016.
 */
import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

declare var ContentTools: any;
export var contentEditor: ContentEditor;

@Injectable()
export class ContentEditor {
   private contentChangeSource = new Subject<string>();
   private editor = ContentTools.EditorApp.get();

   // constructors

   // public accessors and mutators
   announceContentChanged( content: string ){
      this.contentChangeSource.next( content );
   }

   public initialize() {
      contentEditor = this;

      this.addStyles();
      this.editor.init('*[data-editable]', 'data-name');
      this.editor.addEventListener('saved', this.saveContent );
   }

   public saveContent( textEditEvent: any ) {
      this.editor = this;

      let textEditRegions = textEditEvent.detail().regions;

      if (Object.keys( textEditRegions ).length == 0) {
         return;
      }

      // Set the editor as busy while we save our changes
      this.editor.busy( true );

      // Collect the contents of each region into a FormData instance
      let content:string;
      for ( let name in textEditRegions ) {
         if ( textEditRegions.hasOwnProperty( name )) {
            content = textEditRegions[name];
         }
      }

      // Send the update content to the server to be saved
      contentEditor.announceContentChanged( content );
      this.editor.busy( false );
      new ContentTools.FlashUI('ok');
   }

   watchContentChange(): Observable<string> {
      return this.contentChangeSource.asObservable();
   }

   // protected, private helper methods
   private addStyles() {
      ContentTools.StylePalette.add([
         new ContentTools.Style( 'Button', 'btn', ['a']),
         new ContentTools.Style( 'Chip', 'chip', ['div'])
      ]);
   }
}
