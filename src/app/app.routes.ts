import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import path from 'path';
import { DetailsComponent } from './details/details.component';


export const routes: Routes = [
    {path: '', redirectTo: '/category/all', pathMatch: 'full'},
    {path: 'category', redirectTo: '/category/all', pathMatch: 'full'},
    {path: 'category/:name', component: NavbarComponent},
    {path:"details/:id",component:DetailsComponent}

];
