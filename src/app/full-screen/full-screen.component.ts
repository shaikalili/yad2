import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AssetsService } from '../assets.service';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.css']
})
export class FullScreenComponent implements OnInit {
image:string;
id:number;
  constructor(public router:ActivatedRoute,private assetService:AssetsService,public rout:Router) { }

  ngOnInit(): void {
this.router.params.subscribe(
  (params:Params)=>{
    this.id=+params['id'];
  });
  if(this.id===1){
    this.image=this.assetService.selectedAsset.image
  }
  else 
  this.image=this.assetService.selectedAsset.images[this.id-2];
  }
  
onOut(){
  this.assetService.photoIndex=this.id;
this.rout.navigate(['forSale/images'])
}
}
