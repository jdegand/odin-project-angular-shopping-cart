import { Component, Input, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import Product from '../../interfaces/Product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {

  productItem!: Product;

  @Input() set product(product: Product) {
    this.productItem = product;
  }

  cartService = inject(CartService);

  addProduct(productItem: Product) {
    this.cartService.addProduct(productItem);
  }

}
