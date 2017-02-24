import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable} from "rxjs";
import { NavigationBar } from "./navigation-bar";
import { environment } from '../../../environments/environment';

@Injectable()
export class NavigationBarService {
  private resourcePath = 'navigationbar';

  // constructors
  constructor( private http: Http ) {}

  // public accessors and mutators
  add( newCar: NavigationBar ): Observable<Response> {
    const body = JSON.stringify( newCar );
    const headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' });
    return this.http.post( this.buildResourceUrl(), body, { headers: headers });
  }

  deteleCar( carToRefactor: NavigationBar ): Observable<any> {
    let resourceUrl = this.buildResourceUrl( String( carToRefactor.id ));
    return this.http.delete( resourceUrl );
  }

  getCar( index: number ): Observable<NavigationBar> {
    return this.http.get( this.buildResourceUrl( String( index ))).map(
       ( response: Response ) => response.json()
    );
  }

  getCars(): Observable<NavigationBar[]> {
    const body = '';
    const headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' });
    return this.http.get( this.buildResourceUrl(), { headers: headers } ).map(
       (response: Response) => response.json()
    );
  }

  update( car: NavigationBar ): Observable<NavigationBar> {
    const body = JSON.stringify( car );
    const headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' });
    return this.http.put( this.buildResourceUrl( String( car.id ) ), body, { headers: headers }).map(
       (response: Response) => response.json()
    );
  }

  // protected, private helper methods
  private buildResourceUrl( subResource?: string ): string {
    let resourceUrl = environment.navigationBarService.protocol;
    resourceUrl += '//' + environment.navigationBarService.host;
    resourceUrl += Boolean( environment.navigationBarService.contextPath ) ? '/' + environment.navigationBarService.contextPath : '';
    resourceUrl += '/' + this.resourcePath;
    resourceUrl += Boolean( subResource ) ? '/' + subResource : '';
    return resourceUrl;
  }
}
