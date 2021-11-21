import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetsService } from '../assets.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sideNavOpen=false;
  likedCount:number;
  constructor(private assetService:AssetsService,public router:Router) { }

  ngOnInit(): void {
    this.assetService.likedCount.subscribe(count=>this.likedCount=count);
  }
  onLiked(){
this.router.navigate(['liked']);
  }
}
