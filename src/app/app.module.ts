import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './shared/home/home.component';
import { ProductComponent } from './shared/product/product.component';
import { ProductDetailsComponent } from './shared/product-details/product-details.component';
import { CartComponent } from './shared/cart/cart.component';
import { CartItemComponent } from './shared/cart-item/cart-item.component';
import { PriceDetailsComponent } from './shared/price-details/price-details.component';
import { SidePanelComponent } from './shared/side-panel/side-panel.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './core/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailsComponent,
    CartComponent,
    CartItemComponent,
    PriceDetailsComponent,
    SidePanelComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
