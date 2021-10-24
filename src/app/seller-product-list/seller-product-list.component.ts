import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-product-list',
  templateUrl: './seller-product-list.component.html',
  styleUrls: ['./seller-product-list.component.scss']
})
export class SellerProductListComponent implements OnInit {
  list:any;
  constructor(private sharedService:SharedService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllProduct();
  }
  getAllProduct(){
    this.sharedService.getData("product/seller/"+localStorage.getItem('sellerId')).subscribe(
      (res:any)=>{
        this.list=res;
      }
    )
  }

}
