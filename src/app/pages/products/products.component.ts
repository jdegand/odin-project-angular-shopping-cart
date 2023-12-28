import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  apiService = inject(ApiService);

  products = [];

  ngOnInit(): void {

    // add loading state and render loading indicator
    // think about image optimization -> skeleton etc

    this.apiService.getProducts().subscribe((data: any) => {
      this.products = data;
    })
  }
}
