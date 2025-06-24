import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

export const routes: Routes = [
   // { path:"" ,component:LoginPageComponent}
     { path:"" ,component:HomePageComponent},
     { path:"Login" ,component:LoginPageComponent}
];
