import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignIn } from '../models/signin';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  constructor(private http: HttpClient) {}

  onSignIn(signIn: SignIn) {
    return this.http.post('http://localhost:8080/auth/login', signIn);
  }
}
