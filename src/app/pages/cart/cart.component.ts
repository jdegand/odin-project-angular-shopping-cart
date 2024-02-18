import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import CartItem from '../../interfaces/CartItem';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartService = inject(CartService);

  cartItems = this.cartService.cartItems;

  // I thought I might need a Cart Row component
  // to handle state for the quantity input but it doesn't seem necessary
  // I didn't initially plan on adding a quantity input for each row item
  // If you had a separate component, you could use a computed signal for product price * quantity
  // versus doing it in the template -> minimal performance savings ?

  remove(product: CartItem) {
    this.cartService.removeFromCart(product)
  }

  onQuantitySelected(product: CartItem, quantity: number): void {
    this.cartService.updateInCart(product, Number(quantity));
  }

}
