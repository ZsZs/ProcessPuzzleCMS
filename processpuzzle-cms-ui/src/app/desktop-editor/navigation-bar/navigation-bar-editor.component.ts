import {Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {NavigationBar} from "./navigation-bar";
import {NavigationBarService} from "./navigation-bar.service";
import {Desktop} from "../desktop";

@Component({
  selector: 'pp-navigation-bar-editor',
  templateUrl: 'navigation-bar-editor.component.html'
})

export class NavigationBarEditorComponent implements AfterViewInit, OnInit {
  @ViewChild('childModal') public childModal:ModalDirective;
  public navbarEditForm: FormGroup;
  navigationBar: NavigationBar;

  // constructors
  constructor( private router: Router, private formBuilder: FormBuilder, private desktop: Desktop ) {
    this.navigationBar = desktop.navigationBar;
  }

  // public accessors and mutators
  ngAfterViewInit(){
    this.showChildModal();
  }

  ngOnInit() {
    this.navigationBar = this.desktop.navigationBar;
    this.initForm();
  }

  onCancel() {
    this.childModal.hide();
    this.navigateBack();
  }

  onDelete() {
    this.childModal.hide();
    this.desktop.deleteNavigationBar();
    this.navigateBack();
  }

  onSubmit() {
    this.navigationBar = this.navbarEditForm.value;
    this.desktop.updateNavigationBar( this.navigationBar );
    this.navigateBack();
  }

  public showChildModal():void {
    this.childModal.show();
  }

  // protected, private helper methods
  private initForm() {
    this.navbarEditForm = this.formBuilder.group({
      brand: [this.navigationBar ? this.navigationBar.brand : null, Validators.required]
    });
  }

  private navigateBack() {
    this.router.navigate( ['../../'] );
  }

  private updateForm() {
    (<FormControl>this.navbarEditForm.controls['brand']).setValue( this.navigationBar.brand, { onlySelf: true });
  }
}
