import { Component } from '@angular/core';

@Component({
  selector: 'app-show-packages',
  standalone: true,
  templateUrl: './show-packages.component.html', 
  styleUrls: ['./show-packages.component.css']  
})
export class ShowPackagesComponent {

  selectOption(option: string) {
    alert(`בחרת את האפשרות: ${option}`);
  }

}
