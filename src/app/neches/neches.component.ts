import { Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Asset } from 'src/asset.model';
import { AssetsService } from '../assets.service';
import { ShowPhotosComponent } from '../show-photos/show-photos.component';

@Component({
  selector: 'app-neches',
  templateUrl: './neches.component.html',
  styleUrls: ['./neches.component.css']
})
export class NechesComponent implements OnInit {
@Input() asset:Asset
@ViewChild('like')like:ElementRef;
@ViewChild('ditails')moreDitails:ElementRef;
@ViewChild('image')image:ElementRef;
@ViewChild('adress')adress:ElementRef;
@ViewChild('info')info:ElementRef;
@ViewChild('price')price:ElementRef;
@ViewChild('counter')imageCounter:ElementRef;
@ViewChild('heart')heart:ElementRef;
changecolor=false;
changeText=false;
openMoreDitail=false;
contactDitail=false;
countImages:number;
  constructor(private assetService:AssetsService,public dialog:MatDialog,
    public router:Router) { }

  ngOnInit(): void {
    this.countImages=this.asset.images.length;
    this.assetService.likedAssets.forEach(asset=>{if(asset.adress===this.asset.adress)this.changecolor=true});

  }
  onOpenPhotos(){
    if(this.openMoreDitail){

    this.assetService.getSelctedAsset(this.asset);
   // this.dialog.open(ShowPhotosComponent);
   this.router.navigate(['forSale/images']);
    }
  }
  onLike(){
  this.changecolor=!this.changecolor;
  if(this.changecolor){
    this.assetService.likedAssets.push(this.asset);
    this.assetService.likedCount.next(this.assetService.likedAssets.length);
  }
  if(!this.changecolor){
  this.assetService.likedAssets.splice(this.assetService.likedAssets.indexOf(this.asset),1);
  this.assetService.likedCount.next(this.assetService.likedAssets.length);
  }
  }
  changeImage(){
    if(this.changeText){
      return 'scale(1.03) translateZ(0)';
    }
  }
  changeColorAc(){
     if(this.asset.property.ac)
        return '#363636'
  }
  changeFill(){
   return this.changecolor?'#ff7100':'white';
  }
  changeSroke(){
    return this.changecolor?'#ff7100':'#363636';
  }
  changeFillAc(){
    if(this.asset.property.ac){
    return '#363636'
    }
  }
  changeStrokAc(){
    if(this.asset.property.ac)
    return '#363636'
  }
  changeFillsorag(){
    if(this.asset.property.soragim)
    return '#363636'
  }
  changeSrokesorag(){
    if(this.asset.property.soragim)
    return '#363636'
  }
  changeColorSorag(){
    if(this.asset.property.soragim)
       return '#363636'
 }
  changeFillhendi(event:any){
    if(this.asset.property.handicap){
    return '#363636'
    }
  }
  changeSrokehendi(){
    if(this.asset.property.handicap)
    return '#363636'
  }
  changeColorHendi(){
    if(this.asset.property.handicap)
       return '#363636'
 }
  changeFillela(){
    if(this.asset.property.elavetor)
    return '#363636'
  }
  changeSrokeela(){
    if(this.asset.property.elavetor)
    return '#363636'
  }
  changeColorela(){
    if(this.asset.property.elavetor)
       return '#363636'
 }
  changeFillm(){
    if(this.asset.property.machsan)
    return '#363636'
  }
  changeSrokem(){
    if(this.asset.property.machsan)
    return '#363636'
  }
  changeColorm(){
    if(this.asset.property.machsan)
       return '#363636'
 }
  changeFillf(){
    if(this.asset.property.fernicher)
    return '#363636'
  }
  changeSrokef(){
    if(this.asset.property.fernicher)
    return '#363636'
  }
  changeColorf(){
    if(this.asset.property.fernicher)
       return '#363636'
 }
  changeFillr(){
    if(this.asset.property.restore)
    return '#363636'
  }
  changeSroker(){
    if(this.asset.property.restore)
    return '#363636'
  }
  changeColorr(){
    if(this.asset.property.restore)
       return '#363636'
 }
  changeFilld(){
    if(this.asset.property.doors)
    return '#363636'
  }
  changeSroked(){
    if(this.asset.property.doors)
    return '#363636'
  }
  changeColord(){
    if(this.asset.property.doors)
       return '#363636'
 }
  onMoreDitails(){
  this.moreDitails.nativeElement.classList.toggle('more-ditails');
  this.image.nativeElement.classList.toggle('more-ditails-image');
  this.adress.nativeElement.classList.toggle('more-ditails-adress');
  this.info.nativeElement.classList.toggle('more-ditails-info');
  this.price.nativeElement.classList.toggle('more-ditails-price');
  this.like.nativeElement.classList.toggle('like-ditails');
  this.imageCounter.nativeElement.classList.toggle('image-counter-height');
  this.openMoreDitail=!this.openMoreDitail;
}
onMouseOver(){
  this.imageCounter.nativeElement.style.display='flex';
this.changeText=true;
}
onMouseOut(){
  this.imageCounter.nativeElement.style.display='none';
this.changeText=false;
}
onContactDitail(){
  this.contactDitail=!this.contactDitail;
}
onheartOver(){
  this.heart.nativeElement.style.stroke="#ff7100";
}
onheartOut(){
  if(!this.changecolor)
  this.heart.nativeElement.style.stroke="#363636";
}
}
