import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthenticationComponent } from './authentication.component';

var appRoutes: Routes = [
    { 
        path: 'auth', 
        component: AuthenticationComponent 
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
export class AuthenticationRoutingModule {

}
