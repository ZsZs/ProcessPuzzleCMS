import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'pp-navigation-bar',
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">{{brand}}</a>
        </div>
      </div>
    </nav>
`
})

export class NavigationBarComponent implements OnInit {
  @Input() brand: string;

  constructor() { }

  ngOnInit() {
  }

}
