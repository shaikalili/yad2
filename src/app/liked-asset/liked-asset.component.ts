import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/asset.model';
import { AssetsService } from '../assets.service';

@Component({
  selector: 'app-liked-asset',
  templateUrl: './liked-asset.component.html',
  styleUrls: ['./liked-asset.component.css']
})
export class LikedAssetComponent implements OnInit {
assets:Asset[]
  constructor(private assetsService:AssetsService) { }

  ngOnInit(): void {
    this.assets=this.assetsService.likedAssets;
  }

}
