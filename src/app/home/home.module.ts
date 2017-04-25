import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { SpinnerModule } from 'angular2-spinner';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SpinnerModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule {}
