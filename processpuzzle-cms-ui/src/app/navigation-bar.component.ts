import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pp-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styles: [`.brandContainer { padding-left: 10px; padding-right: 10px; padding-top: 3px; }`, `.brandImage { height: 45px; }`]
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  ngOnInit() {
  }

}
