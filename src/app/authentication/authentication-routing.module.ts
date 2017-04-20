import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthenticationComponent } from './authentication.component';
import { LoginGuard } from './../services/auth-guard.service';

const appRoutes: Routes = [
    {
        path: 'auth',
        component: AuthenticationComponent,
        canActivate: [LoginGuard]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthenticationRoutingModule { }
