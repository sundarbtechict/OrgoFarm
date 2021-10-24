import { Component, OnInit } from '@angular/core';

import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss']
})
export class SellerAddProductComponent implements OnInit {

  product:any ={};
  categories:any;
  isSuccess=false;
  msg="";
  constructor(private sharedService:SharedService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCategoryList();
    this.isSuccess =false;
    this.msg="";
  }

  onCreate(){
   this.product['sellerId'] = localStorage.getItem('sellerId');
   this.product['qtyInStock'] = +this.product['qtyInStock'];
   this.product['price'] = +this.product['price'];
   this.sharedService.postData("product/",this.product).subscribe(
    (res:any)=>{
      this.isSuccess=true;
      this.msg=res['message'];
      setTimeout(()=>{
       this.isSuccess = false;
       this.router.navigate(['/sellerdashboard'])
      },5000)
     }
   )
  }
  getCategoryList(){
    this.sharedService.getData("category/list").subscribe(
      (res:any)=>{
        this.categories=res;
      }
    )
  }

}
