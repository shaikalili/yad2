import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Asset } from 'src/asset.model';
import { AssetsService } from '../assets.service';

@Component({
  selector: 'app-show-photos',
  templateUrl: './show-photos.component.html',
  styleUrls: ['./show-photos.component.css']
})
export class ShowPhotosComponent implements OnInit {
asset:Asset
slideIndex=-1;
photoNumber=1;
imageToShow:string;
changeText=false;
@ViewChild('slides')slides:ElementRef
  constructor(private assetService:AssetsService,public router:Router) { }

  ngOnInit(): void {
    this.asset=this.assetService.selectedAsset;
    this.imageToShow=this.asset.image;
    if(this.assetService.photoIndex>1){
      this.imageToShow=this.asset.images[this.assetService.photoIndex-2]
      this.slideIndex=this.assetService.photoIndex-2;
      this.photoNumber=this.assetService.photoIndex;
      this.assetService.photoIndex=undefined;
    }
    
  }

  next(n:number){
    this.slideIndex+=n;
    this.photoNumber+=n;
    if(n===-1&&this.slideIndex===-1){
      this.imageToShow=this.asset.image;
      this.photoNumber=1;
    }
    else
    this.imageToShow=this.asset.images[this.slideIndex];
  }

 /* changeFlow(){
    this.changeText=!this.changeText;
  }*/
  changeStyle(){
    return this.changeText?'flex':'none';
  }
  toFullScreen(photoNumber:number){
    this.router.navigate(['forSale/images/'+photoNumber]);
  }
  back(){
   this.router.navigate(['']);
  }
}
