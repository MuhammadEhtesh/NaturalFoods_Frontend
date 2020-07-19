import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { SignupOptionsComponent } from './Components/signup-options/signup-options.component';
import { CustomerSignupComponent } from './Components/customer-signup/customer-signup.component';
import { DairymanSignupComponent } from './Components/dairyman-signup/dairyman-signup.component';
import { SigninComponent } from './Components/signin/signin.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AuthGuard } from './Guards/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'customer-signup',
    component: CustomerSignupComponent,
  },
  {
    path: 'dairyman-signup',
    component: DairymanSignupComponent,
  },
  { path: 'signin', component: SigninComponent },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'signupfor', component: SignupOptionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
