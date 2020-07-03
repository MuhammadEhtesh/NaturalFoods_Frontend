import { Component, OnInit } from '@angular/core';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page-banner',
  templateUrl: './landing-page-banner.component.html',
  styleUrls: ['./landing-page-banner.component.css'],
})
export class LandingPageBannerComponent implements OnInit {
  mapIcon = faGlobeAmericas;
  constructor() {}

  ngOnInit(): void {}
}
