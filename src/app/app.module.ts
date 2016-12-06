import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompnameComponent } from './compname/compname.component';
import { SubcompComponent } from './compname/subcomp/subcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    CompnameComponent,
    SubcompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
