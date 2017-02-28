import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'pp-bread-crumb',
  template: `
    <ol class="breadcrumb">
      <li><a href="#">Home</a></li>
      <li><a href="#">Library</a></li>
      <li class="active">Data</li>
    </ol>
    `
})
export class BreadCrumbComponent implements OnInit {
  @Input() items: string[];

  constructor() { }

  ngOnInit() {
  }

}
