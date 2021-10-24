import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  list:any=[];

  constructor(private sharedService:SharedService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList(){
    this.sharedService.getData("category/list").subscribe(
      (res:any)=>{
        this.list=res;
      }
    )
  }

}
