import { Component } from '@angular/core';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-quiz-selector',
  standalone: true,
  imports: [UserMenuComponent,RouterModule],
  templateUrl: './quiz-selector.component.html',
  styleUrl: './quiz-selector.component.css'
})
export class QuizSelectorComponent {
   constructor(private router: Router) {}
  navigateToFillQuiz(): void {
    this.router.navigate(['/fill-quiz']);
  }
}
