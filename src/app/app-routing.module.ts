import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {JoinComponent} from "./join/join.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full',
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

