import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerEditProductComponent } from './seller-edit-product/seller-edit-product.component';
import { SellerProductListComponent } from "./seller-product-list/seller-product-list.component";
import { SellerLoginComponent } from "./seller-login/seller-login.component";

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'products/:categoryId/:categoryValue', component:ProductListComponent},
  {path:'product/:productId', component:ProductDetailsComponent},
  {path:'categories', component:CategoryListComponent},
  {path:'sellerdashboard', component:SellerDashboardComponent},
  {path:'selleraddprodcut', component:SellerAddProductComponent},
  {path:'sellereditprodcut/:productId', component:SellerEditProductComponent},
  {path:'sellerproductlist', component:SellerProductListComponent},
  {path:'sellerlogin', component:SellerLoginComponent},
  {path:'', component:LoginComponent, pathMatch:'full'},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
