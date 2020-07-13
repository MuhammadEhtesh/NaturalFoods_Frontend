import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DairymanSignup } from '../models/DairymanSignup';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  onDairymanSignUp(dairymanSignUp: DairymanSignup) {
    return this.http.post(
      'http://localhost:8080/auth/register',
      dairymanSignUp
    );
  }
}
