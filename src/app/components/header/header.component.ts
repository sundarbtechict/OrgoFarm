import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUser:boolean=false;
  username:any;
  constructor(  private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(value => {
     if(localStorage.getItem('userId'))
      {this.isUser=true;
      this.username= localStorage.getItem('firstName')}
    else
      this.isUser=false;
  });
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
  



}
