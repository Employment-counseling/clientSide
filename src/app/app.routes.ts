import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { QuizSelectorComponent } from './components/quiz-selector/quiz-selector.component';
import{ FillQuizComponent } from './components/fill-quiz/fill-quiz.component';

export const routes: Routes = [
   // { path:"" ,component:LoginPageComponent}
     { path:"" ,component:QuizSelectorComponent},
     { path:"Login" ,component:LoginPageComponent},
     { path:"FillQuiz" ,component:FillQuizComponent}
];
