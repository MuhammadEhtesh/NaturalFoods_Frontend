import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DairymanSignup } from '../models/DairymanSignup';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  onDairymanSignup(dairymanSignup: DairymanSignup): Observable<any> {
    return this.http.post(
      'http://localhost:8080/auth/register',
      dairymanSignup
    );
  }
}
