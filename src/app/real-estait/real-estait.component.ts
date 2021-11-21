import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asset } from 'src/asset.model';
import { AssetsService } from '../assets.service';

@Component({
  selector: 'app-real-estait',
  templateUrl: './real-estait.component.html',
  styleUrls: ['./real-estait.component.css']
})
export class RealEstaitComponent implements OnInit {
assets:Asset[];
sorting=['מחיר-מהזול ליקר','מחיר-מהיקר לזול','לפי תאריך']
sortingSelect="לפי תאריך"
sortingOpen=false;
  constructor(private assetsService:AssetsService,public router:Router) { 
    {
    }
  }

  ngOnInit(): void {
    this.assets=this.assetsService.assets;
    this.assetsService.search.subscribe(assets=>{
      this.assets=assets;
    });
  }

  onSelectSorting(by:string){
    this.sortingSelect=by;
    if(by==='מחיר-מהזול ליקר'){
    this.assets.sort((a,b)=>parseInt(this.assetsService.trasformToNumber(a.price))-
    parseInt(this.assetsService.trasformToNumber(b.price)))
    }
    else if(by==='מחיר-מהיקר לזול'){
      this.assets.sort((a,b)=>parseInt(this.assetsService.trasformToNumber(b.price))-
      parseInt(this.assetsService.trasformToNumber(a.price)))
      }
      else{
        this.assets.sort((a,b)=>a.size-b.size);
      }
    
    this.sortingOpen=false;
  }

}
