import { Component, Input } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'groceries-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  @Input() products!: IProduct[];
}
