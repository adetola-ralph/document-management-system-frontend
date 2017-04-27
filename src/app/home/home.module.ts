import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DocumentComponent } from './documents/documents.component';

@NgModule({
  declarations: [
    HomeComponent,
    DocumentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    MomentModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule {}
