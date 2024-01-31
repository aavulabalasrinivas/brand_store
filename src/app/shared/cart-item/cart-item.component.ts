import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit{
  @Input() item:any;
  discountedPrice:any;
  itemPrice:any;

  constructor( private cs:CartService){

  }

  getPriceDetails(item:any){
    this.discountedPrice = this.cs.getPriceDetailsInCartItem(item).discountedPrice;
    this.itemPrice = this.cs.getPriceDetailsInCartItem(item).price;
  }

  ngOnInit(): void {
    this.getPriceDetails(this.item)    
  }

  decItemCount(item:any){
    this.cs.decProdCount(item);
    this.getPriceDetails(item);
  }

  incItemCount(item:any){
    this.cs.incProdCount(item);
    this.getPriceDetails(item);
  }

  removeItem(item:any){
    this.cs.removeItemFromCart(item);
  }

}
