import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import Product from '../../interfaces/Product';
import { LoaderComponent } from '../../components/loader/loader.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, LoaderComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  apiService = inject(ApiService);

  products: Product[] = [];

  loading = true;

  error: unknown;

  ngOnInit(): void {

    // think about image optimization -> skeleton etc
    // eslint problem with data being `any` type -> might not be easy fix    
    this.apiService.getProducts().subscribe({
      next: (data: any) => this.products = data,
      error: (e: unknown) => {
        this.loading = false;
        this.error = e;
      },
      complete: () => this.loading = false
    })
  }
}
