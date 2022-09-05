import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  titles: string[] = ['#', 'Product', 'Price'];

  searchText = '';

  constructor(private http: HttpClient) {}

  searchProduct() {
    this.filteredProducts = this.products.filter((coin) =>
      coin.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  ngOnInit() {
    let api = 'https://fakestoreapi.com/products';
    this.http.get<Product[]>(api).subscribe(
      (data) => {
        console.log(data);
        this.products = data;
        this.filteredProducts = data;
      },
      (error) => console.log(error)
    );
  }
}
