import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupService } from 'src/app/Services/Signup.service';
import { DairymanSignup } from 'src/app/models/DairymanSignup';

@Component({
  selector: 'app-dairyman-signup',
  templateUrl: './dairyman-signup.component.html',
  styleUrls: ['./dairyman-signup.component.css'],
})
export class DairymanSignupComponent implements OnInit {
  constructor(private signUpService: SignupService) {}

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });
  }

  OnSubmitSignUp() {
    const formvalue = this.form.value;
    const dairymanSignup = new DairymanSignup(
      formvalue.firstname,
      formvalue.lastname,
      formvalue.email,
      formvalue.password,
      formvalue.confirmpassword,
      formvalue.phone
    );
    this.signUpService.onDairymanSignup(dairymanSignup);
  }
}
