import {RouterModule} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {JoinComponent} from '../join/join.component';
import {NgModule} from "@angular/core";
@NgModule({
  imports: [
    RouterModule.forChild([]),
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
export const homepRoutingProviders = [
  // authProviders,
  // CanDeactivateGuard
];
