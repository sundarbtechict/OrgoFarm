import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { images } from '../image';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId:any;
  images = images;

  product:any={};
  constructor(private activatedRoute: ActivatedRoute,private sharedService:SharedService,
    private router: Router) { }
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('productId');
    this.getProduct();

  }
  getProduct(){
    this.sharedService.getData("product/"+this.productId).subscribe(
      (res:any)=>{
        this.product=res;
      }
    )
  }

}
