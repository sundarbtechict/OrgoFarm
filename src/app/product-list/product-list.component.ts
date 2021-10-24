import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { images } from '../image';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  categoryId:any;
  list:any=[];
  images = images;
  categoryValue:any;
  constructor(private activatedRoute: ActivatedRoute,private sharedService:SharedService,
    private router: Router) { }

  ngOnInit(): void {
    this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
    this.categoryValue = this.activatedRoute.snapshot.paramMap.get('categoryValue');
    this.getProductList();
  }

  getProductList(){
    this.sharedService.getData("product").subscribe(
      (res:any)=>{
        this.list=res;
        this.list = this.list.filter( (item:any)=>item['categoryId']==this.categoryId );
      }
    )
  }
  addtocart(product:any, qty:any){
      let cart = JSON.parse(localStorage.getItem('cart')|| '{}');
      cart[product['productId']]={ product:product,qty:qty };
      localStorage.setItem('cart', JSON.stringify(cart))
  }


}
