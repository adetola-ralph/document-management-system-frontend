import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdTabsModule, MdInputModule, MdButtonModule } from '@angular/material';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';

@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MdTabsModule,
    MdInputModule,
    MdButtonModule,
    AuthenticationRoutingModule
  ],
})
export class AuthenticationModule { }
