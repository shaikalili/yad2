import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { RealEstaitComponent } from './real-estait/real-estait.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { CalenderComponent } from './calender/calender.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {MatDialogModule} from '@angular/material/dialog';
import { NechesComponent } from './neches/neches.component';
import { ShowPhotosComponent } from './show-photos/show-photos.component';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AddsComponent } from './adds/adds.component';
import { LikedAssetComponent } from './liked-asset/liked-asset.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
 interactionPlugin
])

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RealEstaitComponent,
    SearchFormComponent,
    AdvancedSearchComponent,
    CalenderComponent,
    NechesComponent,
    ShowPhotosComponent,
    FullScreenComponent,
    SideNavComponent,
    AddsComponent,
    LikedAssetComponent
  ],
  entryComponents:[
    CalenderComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    FullCalendarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
