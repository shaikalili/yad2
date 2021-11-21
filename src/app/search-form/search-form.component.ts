import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Asset } from 'src/asset.model';
import { AssetsService } from '../assets.service';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  good = false;
  rooms = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, "הכל"];
  roomsFrom = "הכל";
  roomsTo = "הכל";
  message = "חדרים";
  onOpenInput = false;
  numberOfFromRoomSelected = false;
  numberOfToRoomSelected = false;
  advancedSearchOpen = false;
  messageTypeAsset = "בחרו סוגי נכסים";
  adress = [];
  city = [];
  neighberhood = [];
  assetTypesSearchArray = [];
  checkedApartments: boolean[] = [false, false, false, false, false, false, false, false, false];
  checkedVilas: boolean[] = [false, false, false, false];
  checkedOthers: boolean[] = [false, false, false, false, false, false, false];
  assetTypeOpen = false;
  @ViewChild('serchInput') searchInput: ElementRef;
  @ViewChild('dropDown') dropDownAssetType: ElementRef;
  @ViewChild('span') span: ElementRef;
  changeCheckMark = false;
  changeVilaMark = false;
  changeOthersMark = false;
  changeAllMark = false;
  elser;
  vilaser;
  apartmenser;
  openRooms;
  onFrom;
  onTo;
  @ViewChild('mini')min:ElementRef;
  @ViewChild('maxi')max:ElementRef;
  assetsToDeepSearch:Asset[];
  constructor(private assetsService: AssetsService) { }

  ngOnInit(): void {
  }
  onInput() {
    this.adress = this.assetsService.onAdressSearch(this.searchInput.nativeElement.value);
    this.city = this.assetsService.onCitySearch(this.searchInput.nativeElement.value);
    this.neighberhood = this.assetsService.onNieghbehoodSearch(this.searchInput.nativeElement.value);
    if (this.city.length < 1 && this.adress.length < 1 && this.neighberhood.length < 1) {
      this.onOpenInput = false;
    }
    else {
      this.onOpenInput = true;
    }
  }

  onAssetTypeSelect() {
    this.assetTypeOpen = !this.assetTypeOpen;
  }
  onSelect(el: string) {
    this.onOpenInput = false;
    this.searchInput.nativeElement.value = el;
  }
  onSelectFromNumber(number) {
    this.roomsFrom = number;
    this.numberOfFromRoomSelected = true;
    if (this.numberOfToRoomSelected) {
      this.message = this.roomsTo + "-" + this.roomsFrom;
    }
    else {
      this.message = "מ- " + this.roomsFrom;
    }
  }
  onSelectToNumber(number) {
    this.roomsTo = number;
    this.numberOfToRoomSelected = true;
    if (this.numberOfFromRoomSelected) {
      this.message = this.roomsTo + "-" + this.roomsFrom;
    }
    else {
      this.message = "עד- " + this.roomsTo;
    }
  }
  onAdvancedSearch() {
    this.advancedSearchOpen = !this.advancedSearchOpen;
    this.assetsService.advancedSearch.subscribe(search=>{this.advancedSearchOpen=search});
  }
  onSubmit(f: NgForm) {
    console.log(f);
     let assetTypesSearchArray = [];
    let index = 0;
    for (let [key, value] of Object.entries(f.controls)) {
      if(key=='else'||key=='vilas'||key=='apartments'){
        value.setValue(false);
      }
      if (value.value) {
        assetTypesSearchArray.push(key);
        index++;
      }
    }
    this.assetTypeOpen = false;
    if (index > 0) {
      this.messageTypeAsset = index + " סוגי נכסים";
      this.span.nativeElement.style.color = "#000000"
    }
    else {
      this.messageTypeAsset = "בחרו סוגי נכסים";
      this.span.nativeElement.style.color = "#999999"
    }
   this.assetTypesSearchArray=this.assetsService.transformToHebrew(assetTypesSearchArray);
    console.log(this.assetTypesSearchArray);
  }
  onChecked() {
    this.changeCheckMark = !this.changeCheckMark;
    if (this.changeCheckMark) {
      for (let i = 0; i < 9; i++) {
        this.checkedApartments[i] = true;
      }
    }
    else {
      for (let i = 0; i < 9; i++) {
        this.checkedApartments[i] = false;
      }
    }

  }
  onVilas() {
    this.changeVilaMark = !this.changeVilaMark;
    if (this.changeVilaMark) {
      for (let i = 0; i < 4; i++) {
        this.checkedVilas[i] = true;
      }
    }
    else {
      for (let i = 0; i < 4; i++) {
        this.checkedVilas[i] = false;
      }
    }
  }
  onOthers() {
    this.changeOthersMark = !this.changeOthersMark;
    if (this.changeOthersMark) {
      for (let i = 0; i < 7; i++) {
        this.checkedOthers[i] = true;
      }
    }
    else {
      for (let i = 0; i < 7; i++) {
        this.checkedOthers[i] = false;
      }
    }
  }
  onAllAsset() {
    this.changeAllMark = !this.changeAllMark;
    if (this.changeAllMark) {
      for (let i = 0; i < 7; i++) {
        this.checkedOthers[i] = true;
      }
      for (let i = 0; i < 4; i++) {
        this.checkedVilas[i] = true;
      }
      for (let i = 0; i < 9; i++) {
        this.checkedApartments[i] = true;
      }
      this.elser=true;
      this.vilaser=true;
      this.apartmenser=true;
    }
    else {
      for (let i = 0; i < 7; i++) {
        this.checkedOthers[i] = false;
      }
      for (let i = 0; i < 4; i++) {
        this.checkedVilas[i] = false;
      }
      for (let i = 0; i < 9; i++) {
        this.checkedApartments[i] = false;
      }
      this.elser=false;
      this.vilaser=false;
      this.apartmenser=false;
    }
  }

  onSearch(){
   // console.log(this.min.nativeElement.value);
    let assetsToSearch:Asset[]=this.assetsService.onSearch(this.searchInput,this.assetTypesSearchArray,
    this.roomsFrom,this.roomsTo,this.min,this.max);

   /* assetsToSearch=this.assetsService.assets.filter
    (asset=>asset.adress.slice(0,asset.adress.length-2)===this.searchInput.nativeElement.value);
    if(assetsToSearch.length<1){
    assetsToSearch=this.assetsService.assets.filter
    (asset=>asset.city===this.searchInput.nativeElement.value);
    }
    if(assetsToSearch.length<1){
    assetsToSearch=this.assetsService.assets.filter
    (asset=>asset.neighberhood===this.searchInput.nativeElement.value);
    }
    if(assetsToSearch.length<1){
      assetsToSearch=this.assetsService.assets;
    }
     
    if(this.assetTypesSearchArray.length<1||this.assetTypesSearchArray.length>19){
      assetsToSearch=assetsToSearch;
    }
    else{
      let arrayOfTypes=[];
      this.assetTypesSearchArray.forEach(type=>{
        assetsToSearch.forEach(asset=>{
          if(asset.subType===type){
             arrayOfTypes.push(asset);
          }
        });
      });
      assetsToSearch=arrayOfTypes;
    }
    assetsToSearch=this.searchRooms(assetsToSearch);
    assetsToSearch=this.searchPrice(assetsToSearch);
    this.assetsToDeepSearch=assetsToSearch;*/
    this.assetsService.search.next(assetsToSearch);
   // console.log(assetsToSearch);
    
  }
 /* searchRooms(roomsArray:Asset[]){
    let numto:number;
    let numfrom:number;
    let Rooms=[];
    if(this.roomsFrom==='הכל') numfrom=0;
    else numfrom=+this.roomsFrom;
    if(this.roomsTo==='הכל') numto=20;
    else numto=+this.roomsTo;
  Rooms = roomsArray.filter(asset=>(asset.rooms>=numfrom&&asset.rooms<=numto));
   return Rooms;
  }
  searchPrice(priceArray:Asset[]){
     let price=[];
     let min:number=parseInt(this.min.nativeElement.value);
     let max:number=parseInt(this.max.nativeElement.value);
     let middle:number;
     if(isNaN(min)||this.min.nativeElement.value===''){
      min=0;
     }
     if(isNaN(max)||this.max.nativeElement.value===''){
      max=1000000000;
     }
     if(min>=max){
      middle=min;
      min=max;
      max=middle;
     }
    /* if(max{
       middle=max;
       max=min;
       min=middle;
     }
     console.log(min);
     console.log(max);
     //console.log(priceArray);
     price=priceArray.filter(asset=>parseInt(this.assetsService.trasformToNumber(asset.price))
      >=min&&parseInt(this.assetsService.trasformToNumber(asset.price))<=max);
     return price;
  }*/

}

