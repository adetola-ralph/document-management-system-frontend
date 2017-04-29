import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './../services/auth-guard.service';
import { HomeComponent } from './home.component';
import { DocumentComponent } from './documents/documents.component';
import { NewDocumentComponent } from './documents/NewDocument.component';
import { ViewDocumentComponent } from './documents/viewDocument.component';

const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'documents',
        component: DocumentComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'documents',
        pathMatch: 'full'
      },
      {
        path: 'new',
        component: NewDocumentComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'view/:id',
        component: ViewDocumentComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeRoutingModule {}
