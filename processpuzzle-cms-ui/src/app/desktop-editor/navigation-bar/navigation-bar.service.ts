import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable} from "rxjs";
import { NavigationBar } from "./navigation-bar";
import { UrlBuilder } from '../../utility/url-builder';

@Injectable()
export class NavigationBarService {
  private static readonly serviceProperties = 'navigationBarService';
  private resourcePath = 'navigationbars.json';
  private urlBuilder = new UrlBuilder( NavigationBarService.serviceProperties, this.resourcePath );

  // constructors
  constructor( private http: Http ) {}

  // public accessors and mutators
  delete(navigationBar: NavigationBar ): Observable<any> {
    let resourceUrl = this.urlBuilder.buildResourceUrl( String( navigationBar.id ));
    return this.http.delete( resourceUrl );
  }

  findAll(): Observable<NavigationBar[]> {
    const body = '';
    const headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' });
    return this.http.get( this.urlBuilder.buildResourceUrl(), { headers: headers } ).map(
       (response: Response) => response.json()
    );
  }

  findById(index: number ): Observable<NavigationBar> {
    return this.http.get( this.urlBuilder.buildResourceUrl( String( index ))).map(
       ( response: Response ) => response.json()
    );
  }

  save( navigationBar: NavigationBar ): Observable<NavigationBar> {
    const body = JSON.stringify( navigationBar );
    const headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' });
    if( navigationBar.id ){
      return this.update( navigationBar.id, body, headers );
    }else {
      return this.add( body, headers );
    }
  }

  // protected, private helper methods
  private add( body: string, headers: Headers ): Observable<NavigationBar> {
    return this.http.post( this.urlBuilder.buildResourceUrl(), body, { headers: headers }).map(
       (response: Response) => response.json()
    );
  }

  private update(  id: number, body: string, headers: Headers ): Observable<NavigationBar> {
    return this.http.put( this.urlBuilder.buildResourceUrl( String( id ) ), body, { headers: headers }).map(
       (response: Response) => response.json()
    );
  }

}
