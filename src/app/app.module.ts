import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home.component';

import { AuthenticationModule } from './authentication/authentication.module';
import { AuthGuard, LoginGuard } from './services/auth-guard.service';
import { AuthCheck } from './services/auth-check.service';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [
    AuthCheck,
    AuthGuard,
    LoginGuard,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
