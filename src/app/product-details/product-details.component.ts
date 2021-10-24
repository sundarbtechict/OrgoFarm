import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { images } from '../image';
import {Location} from '@angular/common';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId:any;
  images = images;
  qty:number=1;

  product:any={};
  constructor(private activatedRoute: ActivatedRoute,private sharedService:SharedService,
    private router: Router,private location: Location) { }
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('productId');
    this.getProduct();
    this.qty =1;

  }
  getProduct(){
    this.sharedService.getData("product/"+this.productId).subscribe(
      (res:any)=>{
        this.product=res;
      }
    )
  }
  addtocart(){
    if(this.qty < this.product['qtyInStock']){
    let cart = JSON.parse(localStorage.getItem('cart')|| '{}');
    cart[this.product['productId']]={ 
      productId:this.product['productName'],
      productName:this.product['productName'],
      price:this.product['price'],
      scale:this.product['scale'],
      qty:this.qty ,
      amount:(this.qty * this.product['price'])
    };
    localStorage.setItem('cart', JSON.stringify(cart))
    }
  }
  sub(){
    if(this.qty>1)
    this.qty--;
  }
  add(){
  this.qty++;
  }
  back(): void {
    this.location.back();
}

}
