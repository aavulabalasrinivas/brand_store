import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-price-details',
  templateUrl: './price-details.component.html',
  styleUrls: ['./price-details.component.css']
})
export class PriceDetailsComponent implements OnInit {
  cartItems:any [] = [];
  cartItemsPrice:any;
  cartItemsDiscount:any;
  deliveryCharge:any;

  constructor(private cs:CartService){  }

  ngOnInit(): void {
    this.cartItems = this.cs.getAllCartItems();
    this.getBillingDetails();
    this.cs.cartSubject.subscribe((items:any)=>{
      this.cartItems = items;
      this.getBillingDetails();
    })
  }

  getBillingDetails(){
    let billingDetails = this.cs.getBilling(this.cartItems);
    this.cartItemsPrice = billingDetails.price;
    this.cartItemsDiscount = billingDetails.discount;
    this.deliveryCharge = billingDetails.delivery;    
  }

}
