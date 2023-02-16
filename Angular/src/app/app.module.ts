import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StyleClassModule} from 'primeng/styleclass';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {ChipModule} from "primeng/chip";
import { HeaderComponent } from './components/header/header.component';
import { SignINComponent } from './components/auth/sign-in/sign-in.component';
import { SignUPComponent } from './components/auth/sign-up/sign-up.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignINComponent,
    SignUPComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    RippleModule,
    ChipModule,
    StyleClassModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
