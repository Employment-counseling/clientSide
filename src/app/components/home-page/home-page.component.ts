import { Component } from '@angular/core';
import { NavComponent } from "../../shared/components/nav/nav.component";
import { TextsService } from '../../services/text/texts.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  texts = this.textsService.homePage;

  constructor(private textsService: TextsService) {}
}
