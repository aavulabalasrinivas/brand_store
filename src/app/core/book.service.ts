import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl= 'http://localhost:3000/books';
  books:any[] = [];
  filteredBooks:any;
  sortCriterion:any;
  sortSubject = new Subject();
  priceFilter:any;
  priceFiltersubject = new Subject();
  searchText:any = '';
  searchSubject = new Subject();


  constructor(private http:HttpClient) { }

  getAllBooks(){
    return this.http.get(this.baseUrl).pipe(map((book:any)=>{
      this.books = book;
      this.filteredBooks = this.books;
      return book;
    }))
  }

  getSortCriterion(criterion:any){
    this.sortCriterion = criterion;
    this.sortSubject.next(this.sortCriterion);
  }

  sortBooks(criteria:any){
    switch(criteria){
      case 'Price(Low to High)':{
        this.filteredBooks.sort((a:any, b:any)=>{
          if (a.price < b.price){
            return -1;
          }
          if (a.price > b.price){
            return 1;
          }
          return 0;
        });
        break;
      }
    }
    return this.filteredBooks;
  }

  getPriceFilter(price:any){
    this.priceFilter = price;
    this.priceFiltersubject.next(this.priceFilter);
  }

  getFilteredBooksByPrice(price:any){
    return this.filteredBooks = this.books.filter((book:any)=>{
      return book.price <= price;
    })
  }

  getSearchString(sText:any){
    this.searchText = sText;
    this.searchSubject.next(this.searchText);
  }

  getCurrentBook(id:any){
    return this.books.find((book:any)=>{
      return book.isbn === id.isbn;
    })
  }
}
