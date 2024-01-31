import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/core/book.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books:any;
  searchText:any;

  constructor(private bs:BookService){

  }

  ngOnInit(): void {
    this.bs.getAllBooks().subscribe((res)=>{
      this.books = res;
    });
    this.bs.sortSubject.subscribe((sortCriterion:any)=>{
      this.books = this.bs.sortBooks(sortCriterion);
    })
    this.bs.priceFiltersubject.subscribe((price:any)=>{
      this.bs.getAllBooks().subscribe((res)=>{
        this.books = res;
        this.books = this.bs.getFilteredBooksByPrice(price);
      })
    });
    this.bs.searchSubject.subscribe((searchString:any)=>{
      this.searchText  = searchString;
    })

  }

}
