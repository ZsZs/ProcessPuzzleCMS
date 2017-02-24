import {Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {NavigationBar} from "./navigation-bar";
import {NavigationBarService} from "./navigation-bar.service";

@Component({
  selector: 'app-navigation-bar-factory',
  templateUrl: 'navigation-bar-factory.component.html'
})

export class NavigationBarFactoryComponent implements AfterViewInit, OnInit {
  @ViewChild('childModal') public childModal:ModalDirective;
  public navbarEditForm: FormGroup;
  navigationBar: NavigationBar;
  desktopTemplate = `<DynamicComponent [componentTemplate]='"<span>Updated content...</span>"'></DynamicComponent>`;
  @Output() desktopChanged: EventEmitter<string> = new EventEmitter();

  // constructors
  constructor( private router: Router, private formBuilder: FormBuilder, navigationBarService: NavigationBarService ) { }

  // public accessors and mutators
  ngAfterViewInit(){
    this.showChildModal();
  }

  ngOnInit() {
    this.initForm();
  }

  onCancel() {
    this.childModal.hide();
    this.navigateBack();
  }

  onSubmit() {
    const navigationBar = this.navbarEditForm.value;
    this.desktopChanged.emit( this.desktopTemplate );
    this.navigateBack();
  }

  public showChildModal():void {
    this.childModal.show();
  }

  // protected, private helper methods
  private initForm() {
    this.navbarEditForm = this.formBuilder.group({
      brand: [this.navigationBar ? this.navigationBar.brand : '', Validators.required]
    });
  }

  private navigateBack() {
    this.router.navigate( ['../../'] );
  }

  private updateForm() {
    (<FormControl>this.navbarEditForm.controls['brand']).setValue( this.navigationBar.brand, { onlySelf: true });
  }
}
