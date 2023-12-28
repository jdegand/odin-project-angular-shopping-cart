import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    { path: 'cart', title: 'Shopping Cart', component: CartComponent },
    { path: 'products', title: 'Platzi Fake Store', component: ProductsComponent },
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: '**', title: '404 Not Found', component: NotFoundComponent }
];
