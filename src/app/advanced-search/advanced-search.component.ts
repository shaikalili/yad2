import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Asset } from 'src/asset.model';
import { AssetsService } from '../assets.service';
import { CalenderComponent } from '../calender/calender.component';
import { Property } from '../property.model';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {
  good=false;
  FromfloorNext=[ 'מרתף/פרטר',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]//,"הכל","מרתף/פרטר"] 
  Tofloor=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,'הכל'];
  floorChanged=this.FromfloorNext;
  roomsFrom="הכל";
  roomsTo="הכל";
  message="חדרים";
  openFloorFrom=false;
  openFloorTo=false;
  numberOfFromRoomSelected=false;
  numberOfToRoomSelected=false;
  @Input() searchInput:ElementRef;
  @Input()assetsType;
  @Input() roomFrom;
  @Input() roomTo;
  @Input() minimum:ElementRef;
  @Input() maximum:ElementRef;
  @ViewChild('minSize')minSize:ElementRef;
  @ViewChild('maxSize')maxSize:ElementRef;
  @ViewChild('date')date:ElementRef;
  subType=[false,false,false,false,false,false,false,false,false,false,false];

  constructor(public dialog:MatDialog, private assetsService:AssetsService) { }

  ngOnInit(): void {
 this.assetsService.eventDate.subscribe(date=>{
  //console.log(date.dateStr); 
  this.date.nativeElement.value=date});
  }
onSelectFromNumber(number){
this.FromfloorNext=this.floorChanged;
this.roomsFrom=number;
if(number==='מרתף/פרטר')number=0;
this.Tofloor=this.FromfloorNext.slice(number,this.FromfloorNext.length);
this.openFloorFrom=false;
}
onSelectToNumber(number){
 // console.log(this.floorChanged);
  this.floorChanged=this.FromfloorNext;
  this.roomsTo=number;
  if(number==='הכל')number=18;
  console.log(this.FromfloorNext);
  this.FromfloorNext=this.FromfloorNext.slice(0,number);
  this.openFloorTo=false;
  }
  openFromFloor(){
   this.openFloorFrom=!this.openFloorFrom;
  }
  openToFloor(){
    this.openFloorTo=!this.openFloorTo;
   }
   openCalendar(){
    const dialogRef = this.dialog.open(CalenderComponent);
   }
   onSearch(){
     let assetsToDeepSearch:Asset[]=[];
      assetsToDeepSearch= this.assetsService.onSearch(this.searchInput,this.assetsType,this.roomFrom,
      this.roomTo,this.minimum,this.maximum);
     assetsToDeepSearch= this.filterAssetProperty(assetsToDeepSearch,this.subType);
     assetsToDeepSearch=this.filterFloor(assetsToDeepSearch);
     assetsToDeepSearch=this.onSearchSize(assetsToDeepSearch);
      this.assetsService.search.next(assetsToDeepSearch);
      this.assetsService.advancedSearch.next(false);
   }

   filterAssetProperty(assets:Asset[],subType:boolean[]){
     let afterCompairingProperty:Asset[]=[];
     let compareProperty=new Property(subType[0],subType[1],subType[2],subType[3],subType[4],
      subType[5],subType[6],subType[7],subType[8],subType[9],subType[10]);
     
     assets.forEach(asset=>{
       if(this.isEquel(asset.property,compareProperty)){
         afterCompairingProperty.push(asset);
       }
     });
     return afterCompairingProperty;
   }
   isEquel(obj1:Property,obj2:Property){
     let obj1Keys=Object.keys(obj1);
     let obj2Keys=Object.keys(obj2);

     for(let key of obj1Keys){       
       if(obj2[key]===true&&obj1[key]===false){
         return false;
       }
     }
     return true;
   }

   filterFloor(assets:Asset[]){
     let floorFilter=[];
     let floor:number
     let roomsF=parseInt(this.roomsFrom);
     let roomsT=parseInt(this.roomsTo)
    // console.log(this.roomsFrom);
    if(this.roomsFrom==='מרתף/פרטר'||this.roomsFrom==='הכל'){roomsF=0};
    if(this.roomsTo==='הכל'){roomsT=30};
   assets.forEach(asset=>{
    if(asset.floor==='קומת קרקע'){
      floor=0;
    }
    else{
    floor=parseInt(asset.floor);
    }
    if(floor>=roomsF&&floor<=roomsT){
      floorFilter.push(asset);
    }
   });
   return floorFilter;
  }
  onSearchSize(assetsSearch:Asset[]){
   let size=[];
   let min:number=parseInt(this.minSize.nativeElement.value);
   let max:number=parseInt(this.maxSize.nativeElement.value);
   let middle:number;
   if(isNaN(min)||this.minSize.nativeElement.value===''){
    min=0;
   }
   if(isNaN(max)||this.maxSize.nativeElement.value===''){
    max=1000000000;
   }
   if(min>=max){
    middle=min;
    min=max;
    max=middle;
   }
   console.log(min);
   console.log(max);
   size=assetsSearch.filter(asset=>asset.size
    >=min&&asset.size<=max);
   return size;
  
  }
}
