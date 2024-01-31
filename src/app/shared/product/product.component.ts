import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() book:any
  isProductInCart:boolean = false;
  id:any;

  constructor(private cs:CartService){

  }

  ngOnInit(): void {
    this.id = { 'isbn': this.book.isbn };
    
  }

  addToCart(book:any){
    this.cs.addProductToCart(book)
    this.isProductInCart = true;

  }

}
