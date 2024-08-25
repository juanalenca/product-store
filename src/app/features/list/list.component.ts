import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  products: any[] = [];
  httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.httpClient.get<any[]>('/api/products').subscribe((products) => {
      this.products = products;
    });
  }

  trackById(index: number, product: any): number {
    return product.id;
  }
}
