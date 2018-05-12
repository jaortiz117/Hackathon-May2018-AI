import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { GraphCmpComponent } from './graph-cmp/graph-cmp.component';
import { MapCmpComponent } from './map-cmp/map-cmp.component';
import { MenuCmpComponent } from './menu-cmp/menu-cmp.component';
import { Graph2Component } from './graph2/graph2.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphCmpComponent,
    MapCmpComponent,
    MenuCmpComponent,
    Graph2Component,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      // {path: '', component: },
      {path: 'about', component: AboutUsComponent},
      // {path: '**', component: MapCmpComponent}
    ])
   //  AgmCoreModule.forRoot({
   //   apiKey: 'YOUR_KEY'//still needs key
   // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
