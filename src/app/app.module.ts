import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'auth', component: null }, // signin and signup
  { path: 'home', component: null }, // for viewing all the documents
  { path: 'setting', component: null }, // user profiles
  { path: 'documents/create', component: null}, // create a new document
  { path: 'documents/:id', component: null}, // viewing a document
  { path: 'documents/:id/edit', component: null}, // editing a document
  { path: '**', component: null}, // for all other routes that don't exist
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
