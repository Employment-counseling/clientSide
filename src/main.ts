import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ShowPackagesComponent } from './app/components/show-packages/show-packages.component';



bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
