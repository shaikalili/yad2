import { Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {filter} from 'rxjs/operators';
import { AssetsService } from './assets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'yad2';
  constructor(private router:Router,private assetService:AssetsService){

  }
  ngOnInit(){

   
   /* this.router.events.pipe(filter(event=>event instanceof NavigationEnd)).subscribe(()=>
    window.scrollTo(0,1000));*/
  }
}
