import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/core/book.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit{
  isPriceFiltersVisible:boolean = false;
  priceFilters:any [] = [500, '500 - 1000', '1000 - 1500'];

  constructor (private bs:BookService){

  }

  ngOnInit(): void {
    
  }

  showPriceFilters(){
    this.isPriceFiltersVisible = !this.isPriceFiltersVisible;
  }

  filterBooksByPrice(priceFilter:any){
    this.bs.getPriceFilter(priceFilter);

  }

}
