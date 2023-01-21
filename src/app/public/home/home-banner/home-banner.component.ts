import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'al-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css'],
})
export class HomeBannerComponent {
  constructor(private router: Router) {}

  navigateToDashboard(): void {
    this.router.navigate(['app/dashboard']);
  }
}
