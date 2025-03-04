import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';  // ייבוא מודול כפתור


@Component({
  selector: 'app-show-packages',
  standalone: true,
  templateUrl: './show-packages.component.html', 
   imports: [ButtonModule],
  styleUrls: ['./show-packages.component.css']  
})
export class ShowPackagesComponent {

  onConsultationClick() {
    console.log("ייעוץ תעסוקתי נבחר");
  }

  onGraphologyClick() {
    console.log("גרפולוגיה נבחרה");
  }

  onMeetingClick() {
    console.log("פגישת ייעוץ נבחרה");
  }

}
