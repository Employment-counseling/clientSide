import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowPackagesComponent } from "./components/show-packages/show-packages.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShowPackagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clientSide';
}
