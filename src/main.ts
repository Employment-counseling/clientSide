import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route, RouterModule } from '@angular/router'; 
import { AppComponent } from './app/app.component';
import { ShowPackagesComponent } from './app/components/show-packages/show-packages.component';
import { PayMentComponent } from './app/components/pay-ment/pay-ment.component';
import { HomeComponent } from './app/components/home/home.component';
import { provideHttpClient } from '@angular/common/http';
import {routes} from "./app/app.routes"

// const routes: Route[] = [
//   { path: '', component: HomeComponent }, 
//   { path: 'ShowPackages', component: ShowPackagesComponent },
//   { path: 'payment', component: PayMentComponent },

// ];

bootstrapApplication(AppComponent, {
  providers: [[provideRouter(routes)],provideHttpClient(),]  
});


