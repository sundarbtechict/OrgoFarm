import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:any;
  password:any;


  constructor(private sharedService:SharedService,
    private router: Router) { }

    ngOnInit(): void {
  }

  onLogin(){
    let input={
      "userId": this.username,
      "password": this.password
    }
    
    this.sharedService.postData("customers/login",input).subscribe(
      (response:any)=>{
        //console.log(response);
        localStorage.setItem('userId',response['userId']);
        localStorage.setItem('firstName',response['firstName']);
        localStorage.setItem('lastName',response['lastName']);
        localStorage.setItem('email',response['email']);
        localStorage.setItem('mobile',response['mobile']);
        this.router.navigate(['categories']);
      }
    )
  }


}
