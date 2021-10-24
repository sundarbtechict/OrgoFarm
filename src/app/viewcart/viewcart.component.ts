import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.scss']
})
export class ViewcartComponent implements OnInit {
  list:any;
  totalAmount:any;
  isSuccess=false;
  msg="";
  constructor(private sharedService:SharedService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllProduct();
    this.isSuccess =false;
    this.msg="";
  }
  
  getAllProduct(){
    this.list = JSON.parse(localStorage.getItem('cart')||'{}');
    this.totalAmount =0;
    this.list = Object.values(this.list);
    for(let item of this.list){
      this.totalAmount = this.totalAmount + item['amount'];
    }
  }
  placeOrder(){
    let productList=[]
    for(let item of this.list){
      let temp={
        productId:item['productId'],
        quantity:item['qty'],
        scale:item['scale'],
      }
      productList.push(temp);
    }
   
    let input={
      userId:localStorage.getItem('userId'),
      productList:productList,
      totalCost:this.totalAmount
    }
    this.sharedService.postData("orders/customer",input).subscribe(
      (res:any)=>{
        this.isSuccess=true;
        this.msg=res['message'];
        localStorage.setItem('cart','{}');
        setTimeout(()=>{
         this.isSuccess = false;
         this.router.navigate(['/categories'])
        },5000)
      }
    )
  }
}
