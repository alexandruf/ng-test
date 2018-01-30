import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MultiauthAmonComponent } from './multiauth-amon/multiauth-amon.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageMenuComponent } from './message-menu/message-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    MultiauthAmonComponent,
    LogoComponent,
    NavbarComponent,
    MessageMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
