import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StyleClassModule} from 'primeng/styleclass';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Component1Component} from './component1/component1.component';
import {MainComponent} from './main/main.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {ChipModule} from "primeng/chip";

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    MainComponent
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
