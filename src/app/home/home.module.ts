import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {LoginComponent} from "../login/login.component";
import {MaterialModule} from "@angular/material";
import {HomeRoutingModule, homepRoutingProviders} from "./home-routing.module";
import {JoinComponent} from "../join/join.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    HomeRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    homepRoutingProviders,
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule {
}
