import { Component, Input,
  HostBinding} from '@angular/core';
  
  import { Product } from '../product.model';

@Component({
  selector: 'product-popup',
  templateUrl: './image.component.html'
})
export class ProductPopupComponent {
  @Input() product: string;
  dataPassed = '';
  @HostBinding('attr.class') cssClass = 'item';

  openMyDialog(data) {
    this.dataPassed = data;
    console.log(this.dataPassed);
};
mdlSampleIsOpen : boolean = false;
openModal(open : boolean) : void {
    this.mdlSampleIsOpen = open;
}
}