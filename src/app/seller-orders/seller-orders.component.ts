import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-orders',
  templateUrl: './seller-orders.component.html',
  styleUrls: ['./seller-orders.component.scss']
})
export class SellerOrdersComponent implements OnInit {
  list:any;
  constructor(private sharedService:SharedService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllProduct();
  }
  getAllProduct(){
    this.sharedService.getData("orders/seller/list").subscribe(
      (res:any)=>{
        this.list=res;
      }
    )
  }

}
