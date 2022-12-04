import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any;

  constructor() { }

  ngOnInit(): void {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(j => {
      this.products=j;
      console.log(this.products)
    });
  }

  addToCart(item:any){
    console.log(item);
  }

}
