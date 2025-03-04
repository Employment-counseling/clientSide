import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { ShowPackagesComponent } from '../show-packages/show-packages.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ShowPackagesComponent, RouterModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
