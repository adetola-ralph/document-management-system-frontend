import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
