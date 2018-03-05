import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CartaComponent } from './carta/carta.component';
import { MarvelService } from './marvel.service';



@NgModule({
  declarations: [
    AppComponent,
    CartaComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [
    MarvelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
