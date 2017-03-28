import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {JoinComponent} from "./join/join.component";
import {HomeComponent} from "app/home/home.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'join',
        component: JoinComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

