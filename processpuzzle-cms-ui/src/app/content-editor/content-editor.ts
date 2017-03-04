/**
 * Created by Zsolt on 8/11/2016.
 */
import { Injectable } from '@angular/core';

declare var ContentTools: any;

@Injectable()
export class ContentEditor {
   private editor = ContentTools.EditorApp.get();

   // constructors

   // public accessors and mutators
   public initialize() {
      this.addStyles();
      this.editor.init('*[data-editable]', 'data-name');

      this.editor.addEventListener('saved', function (ev) {
         console.log( 'text saved' );
      });
   }

   // protected, private helper methods
   private addStyles() {
      ContentTools.StylePalette.add([
         new ContentTools.Style('Author', 'author', ['p'])
      ]);
   }
}
