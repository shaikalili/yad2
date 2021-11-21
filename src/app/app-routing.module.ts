import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { HeaderComponent } from './header/header.component';
import { LikedAssetComponent } from './liked-asset/liked-asset.component';
import { RealEstaitComponent } from './real-estait/real-estait.component';
import { ShowPhotosComponent } from './show-photos/show-photos.component';

const routes: Routes = [
  //{path:'',component:RealEstaitComponent,redirectTo:'forSale'},\
  {path:'',component:HeaderComponent},
  {path:'foreSale',component:RealEstaitComponent},
  {path:'forSale/images',component:ShowPhotosComponent},
  {path:'forSale/images/:id',component:FullScreenComponent},
  {path:'liked',component:LikedAssetComponent},

 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'disabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
