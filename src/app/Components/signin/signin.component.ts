import { Component, OnInit } from '@angular/core';
import { SignIn } from '../../models/signin';
import { AuthService } from 'src/app/Services/Auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  form: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      emailPhone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSignin() {
    const signIn = new SignIn(
      this.form.value.emailPhone,
      this.form.value.password
    );
    this.authService.onSignIn(signIn);
  }
}
