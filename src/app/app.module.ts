import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerEditProductComponent } from './seller-edit-product/seller-edit-product.component';
import { SellerProductListComponent } from './seller-product-list/seller-product-list.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { SellerOrdersComponent } from './seller-orders/seller-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    ProductDetailsComponent,
    HeaderComponent,
    FooterComponent,
    CategoryListComponent,
    SellerDashboardComponent,
    SellerAddProductComponent,
    SellerEditProductComponent,
    SellerProductListComponent,
    SellerLoginComponent,
    ViewcartComponent,
    SellerOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
