import { Component, OnInit } from '@angular/core';
import { faQuoteLeft, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
})
export class TestimonialComponent implements OnInit {
  faQuoteLeft = faQuoteLeft;
  faHeart = faHeart;
  constructor() {}

  ngOnInit(): void {}
}
