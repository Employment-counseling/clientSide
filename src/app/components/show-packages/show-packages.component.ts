
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from "../../services/home.service"
import { Package } from '../../models/package.model';
import { NgClass, NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-packages',
  standalone: true,
  templateUrl: './show-packages.component.html', 
  imports: [ButtonModule,CommonModule],
  styleUrls: ['./show-packages.component.css']  
})
export class ShowPackagesComponent implements OnInit {
  packages: Package[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getPackages().subscribe({
      next: (data) => {
        this.packages = data;
      },
      error: (err) => {
        console.error('Error fetching packages', err);
      }
    });
  }

  getClassName(index: number): string {
    const classList = ['text-box', 'textt-box', 'texttt-box'];
    return classList[index % classList.length]; 
  }
}
