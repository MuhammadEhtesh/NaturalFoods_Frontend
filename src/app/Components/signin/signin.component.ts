import { Component, OnInit } from '@angular/core';
import { SignIn } from '../../models/signin';
import { SigninService } from 'src/app/Services/signin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  form: FormGroup;

  constructor(private signinService: SigninService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      emailPhone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSaveProduct() {
    const signIn = new SignIn(
      this.form.value.emailPhone,
      this.form.value.password
    );
    this.signinService.onSignIn(signIn).subscribe((response) => {
      console.log(response);
    });
  }
}
