import { Component, OnInit } from '@angular/core';
import { faMapMarker, faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  mapIcon = faGlobeAfrica;
  constructor() {}

  ngOnInit(): void {}
}
