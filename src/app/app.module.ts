import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import "hammerjs";
import {AppRoutingModule} from "./app-routing.module";
import {LoginComponent} from "./login/login.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "@angular/material";
import {JoinComponent} from "./join/join.component";
import {FormValidationService} from "./shared/form-validation.service";
import {PassWordErrorComponent} from "./shared/error/password-error.component";
import {EmailErrorComponent} from "./shared/error/email-error.component";
import {HomeModule} from "./home/home.module";
@NgModule({
  declarations: [
    LoginComponent,
    JoinComponent,
    AppComponent,
    PassWordErrorComponent,
    EmailErrorComponent,
  ],
  imports: [
    HomeModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [FormValidationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
