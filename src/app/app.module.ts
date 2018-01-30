import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MultiauthAmonComponent } from './multiauth-amon/multiauth-amon.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    MultiauthAmonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
