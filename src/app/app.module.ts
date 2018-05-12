import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { GraphCmpComponent } from './graph-cmp/graph-cmp.component';
import { MapCmpComponent } from './map-cmp/map-cmp.component';
import { MenuCmpComponent } from './menu-cmp/menu-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphCmpComponent,
    MapCmpComponent,
    MenuCmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
   //  AgmCoreModule.forRoot({
   //   apiKey: 'YOUR_KEY'//still needs key
   // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
