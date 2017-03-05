import { Injectable } from '@angular/core';
import {SmartDocument} from "./smart-document";

@Injectable()
export class SmartDocumentService {
  private documents: {[key:string]:SmartDocument; } = {};

  // constructors
  constructor() {
    this.documents["home"] = new SmartDocument( "<h1>Home page</h1><p>Some text.</p>" );
    this.documents["child-one"] = new SmartDocument( "<h1>Child page one</h1>" );
    this.documents["child-two"] = new SmartDocument( "<h1>Child page two</h1>" );
  }

  // public accessors and mutators
  loadDocument ( path: string ): SmartDocument {
    return this.documents[path];
  }

  saveDocument ( document: SmartDocument ){
    console.log( 'Document was saved.' );
  }
}
