import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from "@angular/forms";
import {ModalDirective} from "ng2-bootstrap";
import {Router} from "@angular/router";
import {Desktop} from "../desktop";
import {BreadCrumb} from "./bread-crumb";

@Component({
  selector: 'pp-bread-crumb-editor',
  templateUrl: './bread-crumb-editor.component.html'
})
export class BreadCrumbEditorComponent implements OnInit {
  @ViewChild('childModal') public childModal:ModalDirective;
  public breadCrumbEditForm: FormGroup;
  breadCrumb: BreadCrumb;

  // constructors
  constructor( private router: Router, private formBuilder: FormBuilder, private desktop: Desktop ) {
    this.breadCrumb = desktop.breadCrumb;
  }

  // public accessors and mutators
  ngAfterViewInit(){
    this.showChildModal();
  }

  ngOnInit() {
    this.breadCrumb = this.desktop.breadCrumb;
    this.initForm();
  }

  onCancel() {
    this.childModal.hide();
    this.navigateBack();
  }

  onDelete() {
    this.childModal.hide();
    this.desktop.deleteBreadCrumb();
    this.navigateBack();
  }

  onSubmit() {
    this.breadCrumb = this.breadCrumbEditForm.value;
    this.desktop.updateBreadCrumb( this.breadCrumb );
    this.navigateBack();
  }

  public showChildModal():void {
    this.childModal.show();
  }

  // protected, private helper methods
  private initForm() {
    this.breadCrumbEditForm = this.formBuilder.group({
//      brand: [this.breadCrumb ? this.breadCrumb.brand : null, Validators.required]
    });
  }

  private navigateBack() {
    this.router.navigate( ['../../'] );
  }

  private updateForm() {
//    (<FormControl>this.breadCrumbEditForm.controls['brand']).setValue( this.breadCrumb.brand, { onlySelf: true });
  }
}
