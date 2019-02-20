import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from "./auth/register/register.component";
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";
import {LoginComponent} from "./auth/login/login.component";
import {HomeComponent} from "./auth/home/home.component";
import {UserResolver} from "./shared/resolvers/user-resolver.service";

const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'admin',
        loadChildren: './admin/admin.module#AdminModule'
    },
    {
        path: 'profile/:id',
        component: RegisterComponent,
        resolve: {
            user: UserResolver
        },
        data: {
            title: 'profile_terminal'
        }
    },
    {
        path: '**',
        component: NotFoundComponent,
        data: {
            title: 'not_found'
        }
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
