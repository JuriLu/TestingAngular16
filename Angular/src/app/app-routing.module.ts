import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignINComponent} from "./components/auth/sign-in/sign-in.component";
import {SignUPComponent} from "./components/auth/sign-up/sign-up.component";
import {HeroComponent} from "./components/hero/hero.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'hero', pathMatch: 'full'
  },
  {
    path: 'auth', children: [
      {
        path: 'signin', component: SignINComponent
      },
      {
        path: 'signup', component: SignUPComponent
      },
    ]
  },
  {
    path: 'hero', component: HeroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
