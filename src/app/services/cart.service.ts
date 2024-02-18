import { Injectable, computed, signal } from '@angular/core';
import Product from '../interfaces/Product';
import CartItem from '../interfaces/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = signal<CartItem[]>([]);

  cartItemsTotal = computed(() => this.cartItems().reduce((acc, curr) => acc + curr.quantity, 0));

  subTotal = computed(() => this.cartItems().reduce((acc, curr) => {
    return acc + (curr.product.price * curr.quantity);
  }, 0));

  addProduct(product: Product): void {
    const index = this.cartItems().findIndex(item =>
      item.product.title === product.title);
    if (index === -1) {
      this.cartItems.update(items => [...items, { product, quantity: 1 }]);
    } else {
      this.cartItems.update(items =>
        [
          ...items.slice(0, index),
          { ...items[index], quantity: items[index].quantity + 1 },
          ...items.slice(index + 1)
        ]);
    }
  }

  removeFromCart(cartItem: CartItem): void {
    this.cartItems.update(items => items.filter(item =>
      item.product.title !== cartItem.product.title));
  }

  updateInCart(cartItem: CartItem, quantity: number): void {
    this.cartItems.update(items =>
      items.map(item => item.product.title === cartItem.product.title ?
        { product: cartItem.product, quantity } : item));
  }

}
