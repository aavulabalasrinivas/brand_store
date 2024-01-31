import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/core/book.service';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  currentProduct:any;
  discountedPrice:any;
  isProductInCart:any;

  constructor(private ar:ActivatedRoute, private bs:BookService, private cs:CartService){

  }

  ngOnInit(): void {
    this.ar.queryParams.subscribe((res)=>{
      this.currentProduct = this.bs.getCurrentBook(res);
    });
    this.discountedPrice = this.cs.getDiscountedPrice(this.currentProduct);
    this.isProductInCart = this.cs.isProductInCart(this.currentProduct);
  }

  addToCart(book:any){
    this.cs.addProductToCart(book);
    this.isProductInCart = true;
  }

}
