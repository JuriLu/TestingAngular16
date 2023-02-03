import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'',redirectTo:'firstComponent',pathMatch:'full'},
  {path:'firstComponent',component:Component1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
