import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css'],
})
export class CustomerSignupComponent implements OnInit {
  form: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({});
  }
}
