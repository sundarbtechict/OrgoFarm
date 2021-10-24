
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.scss']
})
export class SellerLoginComponent implements OnInit {
  username:any;
  password:any;


  constructor(private sharedService:SharedService,
    private router: Router) { }

    ngOnInit(): void {
  }

  onLogin(){
    let input={
      "sellerId": this.username,
      "password": this.password
    }
    
    this.sharedService.postData("sellers/login",input).subscribe(
      (response:any)=>{
        //console.log(response);
        localStorage.setItem('sellerId',response['sellerId']);
        localStorage.setItem('firstName',response['firstName']);
        localStorage.setItem('lastName',response['lastName']);
        localStorage.setItem('email',response['email']);
        localStorage.setItem('mobile',response['mobile']);
        this.router.navigate(['sellerdashboard']);
      }
    )
  }

}

