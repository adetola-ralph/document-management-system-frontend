import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // for viewing all the documents
  // { path: 'setting', component: null }, // user profiles
  // { path: 'documents/create', component: null}, // create a new document
  // { path: 'documents/:id', component: null}, // viewing a document
  // { path: 'documents/:id/edit', component: null}, // editing a document
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // for viewing all the documents
  // { path: '**', component: null}, // for all other routes that don't exist
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
