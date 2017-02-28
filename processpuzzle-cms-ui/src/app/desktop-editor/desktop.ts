import {Component, OnInit, Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {NavigationBar} from "./navigation-bar/navigation-bar";
import {BreadCrumb} from "./bread-crumb/bread-crumb";

@Injectable()
export class Desktop {
  private desktopTemplate = `<DynamicComponent [componentTemplate]='"<span>Navigationbar added...</span>"'></DynamicComponent>`;
  private desktopTemplateSource = new Subject<string>();
  breadCrumb: BreadCrumb;
  navigationBar: NavigationBar;

  // constructors
  constructor() { }

  // public accessors and mutators
  deleteBreadCrumb (){
    this.breadCrumb = null;
    this.announceDesktopChanged();
  }

  deleteNavigationBar (){
    this.navigationBar = null;
    this.announceDesktopChanged();
  }

  hasElements (): boolean{
    if ( this.navigationBar != null || this.breadCrumb != null ){
      return true;
    }
    return false;
  }

  updateBreadCrumb ( newBreadCrumb: BreadCrumb ){
    this.breadCrumb = newBreadCrumb;
    this.announceDesktopChanged();
  }

  updateNavigationBar ( newNavigationBar: NavigationBar ){
    this.navigationBar = newNavigationBar;
    this.announceDesktopChanged();
  }

  watchDesktopChange(){
    return this.desktopTemplateSource.asObservable();
  }

  // protected, private helper methods
  private announceDesktopChanged(){
    this.desktopTemplateSource.next();
  }
}
