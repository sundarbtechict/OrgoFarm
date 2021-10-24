import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-edit-product',
  templateUrl: './seller-edit-product.component.html',
  styleUrls: ['./seller-edit-product.component.scss']
})
export class SellerEditProductComponent implements OnInit {

  productId:any;
  product:any ={};
  categories:any;
  isSuccess=false;
  msg="";
  constructor(private activatedRoute: ActivatedRoute,private sharedService:SharedService,
    private router: Router) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('productId');
    this.getCategoryList();
    this.getProduct();
    this.isSuccess =false;
    this.msg="";
  }

  onUpdate(){
   this.product['sellerId'] = localStorage.getItem('sellerId');
   this.product['qtyInStock'] = +this.product['qtyInStock'];
   this.product['price'] = +this.product['price'];
   this.sharedService.putData("product/"+this.productId,this.product).subscribe(
     (res:any)=>{
       this.isSuccess=true;
       this.msg=res['message'];
       setTimeout(()=>{
        this.isSuccess = false;
        this.router.navigate(['/sellerdashboard'])
       },5000)
       //console.log(res);
     }
   )
  }
  getProduct(){
    this.sharedService.getData("product/"+this.productId).subscribe(
      (res:any)=>{
        this.product=res;
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
