import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { SignupOptionsComponent } from './Components/signup-options/signup-options.component';
import { CustomerSignupComponent } from './Components/customer-signup/customer-signup.component';
import { DairymanSignupComponent } from './Components/dairyman-signup/dairyman-signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signupfor', component: SignupOptionsComponent },
  { path: 'customer-signup', component: CustomerSignupComponent },
  { path: 'dairyman-signup', component: DairymanSignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
