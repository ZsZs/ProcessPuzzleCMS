import {Desktop} from '../desktop';
import {DynamicComponentDefinition} from '../dynamic-component-definition';
import {NavigationBarComponent} from './navigation-bar.component';

export class NavigationBarComponentFactory {

   generate(  desktop: Desktop ) {
      let navBarDef: DynamicComponentDefinition;

      if ( desktop.navigationBar ) {
         const navigationBar = desktop.navigationBar;
         navBarDef = new DynamicComponentDefinition( NavigationBarComponent, { brand: navigationBar.brand } );
      }

      return navBarDef;
   }
}
