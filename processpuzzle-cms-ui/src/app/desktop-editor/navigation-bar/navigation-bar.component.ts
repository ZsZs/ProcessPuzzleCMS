import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'pp-navigation-bar',
  template: `
    <header>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">{{brand}}</a>
          </div>
        </div>
      </nav>
    </header>
`
})

export class NavigationBarComponent implements OnInit {
  @Input() brand: string;

  constructor() { }

  ngOnInit() {
  }

}
