
import {Desktop} from '../desktop';
import {DynamicComponentDefinition} from '../dynamic-component-definition';
import {FooterComponent} from './footer.component';
export class FooterComponentFactory {
   generate(  desktop: Desktop ) {
      let footerDef: DynamicComponentDefinition;

      if ( desktop.footer ) {
         const footer = desktop.footer;
         footerDef = new DynamicComponentDefinition( FooterComponent, { copyrightText: footer.copyrightText } );
      }

      return footerDef;
   }
}
