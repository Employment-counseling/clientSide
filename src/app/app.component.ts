import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';  // הוספת RouterModule
import { ShowPackagesComponent } from "./components/show-packages/show-packages.component";
import { PayMentComponent } from "./components/pay-ment/pay-ment.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ShowPackagesComponent, PayMentComponent],  // הוספת RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'clientSide';
}

