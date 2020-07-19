import { SignIn } from '../models/signin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any;
  loggedInUser: Object;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onSignIn(signIn: SignIn) {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    return this.http
      .post('http://localhost:8080/auth/login', signIn)
      .subscribe((res) => {
        this.setSession(res);
        this.router.navigateByUrl(returnUrl);
      });
  }

  private setSession(authResult: any) {
    this.user = authResult.user;
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    localStorage.setItem('token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
