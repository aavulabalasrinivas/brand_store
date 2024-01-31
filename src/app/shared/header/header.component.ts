import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/core/book.service';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  searchText:any = '';
  cartItemCount:any;
  isSortMenuVisible:boolean = false;
  criteria:any[] = ['Price(Low to High)', 'Price(High to Low)', 'Discount(High to Low)', 'Discount(Low to High)'];

  constructor(private cs:CartService, private bs:BookService){}

  ngOnInit(): void {
    this.cs.cartSubject.subscribe((cartItems:any)=>{
      this.cartItemCount = cartItems.length;
    })
  }

  sortBooks(criterion:any){
    this.bs.sortBooks(criterion);

  }

  showSortMenu(){
    this.isSortMenuVisible = !this.isSortMenuVisible;
  }

  searchBook(searchText:any){
    this.bs.getSearchString(searchText);
  }

}
