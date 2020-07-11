import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dairyman-signup',
  templateUrl: './dairyman-signup.component.html',
  styleUrls: ['./dairyman-signup.component.css'],
})
export class DairymanSignupComponent implements OnInit {
  form: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({});
  }
}
