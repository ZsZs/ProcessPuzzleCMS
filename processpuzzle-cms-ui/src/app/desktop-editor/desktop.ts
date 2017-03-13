import {Component, OnInit, Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {NavigationBar} from "./navigation-bar/navigation-bar";
import {BreadCrumb} from "./bread-crumb/bread-crumb";
import {Footer} from "./footer/footer";

@Injectable()
export class Desktop {
  private desktopTemplate = `<DynamicComponent [componentTemplate]='"<span>Navigationbar added...</span>"'></DynamicComponent>`;
  private desktopTemplateSource = new Subject<string>();
  private _breadCrumb: BreadCrumb;
  private _footer: Footer;
  private _navigationBar: NavigationBar;
  id: string;
  name = 'Sample Desktop';

  // constructors
  constructor() { }

  // public accessors and mutators
  deleteBreadCrumb (){
    this._breadCrumb = null;
    this.announceDesktopChanged();
  }

  deleteFooter (){
    this._footer = null;
    this.announceDesktopChanged();
  }

  deleteNavigationBar (){
    this._navigationBar = null;
    this.announceDesktopChanged();
  }

  hasElements (): boolean{
    if ( this._navigationBar != null || this._footer != null || this._breadCrumb != null ){
      return true;
    }
    return false;
  }

  updateBreadCrumb ( newBreadCrumb: BreadCrumb ){
    this._breadCrumb = newBreadCrumb;
    this.announceDesktopChanged();
  }

  updateFooter ( newFooter: Footer ){
    this._footer = newFooter;
    this.announceDesktopChanged();
  }

  updateNavigationBar ( newNavigationBar: NavigationBar ){
    this._navigationBar = newNavigationBar;
    this.announceDesktopChanged();
  }

  watchDesktopChange(){
    return this.desktopTemplateSource.asObservable();
  }

  // properties
  public get breadCrumb(): BreadCrumb { return this._breadCrumb; }
  public get footer(): Footer { return this._footer; }
  public get navigationBar(): NavigationBar { return this._navigationBar; }

  // protected, private helper methods
  private announceDesktopChanged(){
    this.desktopTemplateSource.next();
  }
}
