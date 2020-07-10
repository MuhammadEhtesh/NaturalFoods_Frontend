import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SigninComponent } from './Components/signin/signin.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { PakCititesComponent } from './Components/pak-citites/pak-citites.component';
import { TestimonialComponent } from './Components/testimonial/testimonial.component';
import { SignupOptionsComponent } from './Components/signup-options/signup-options.component';
import { MilkCategoriesComponent } from './Components/milk-categories/milk-categories.component';
import { CustomerSignupComponent } from './Components/customer-signup/customer-signup.component';
import { DairymanSignupComponent } from './Components/dairyman-signup/dairyman-signup.component';
import { DailyDairyWorkComponent } from './Components/daily-dairy-work/daily-dairy-work.component';
import { StrongboneFillerComponent } from './Components/strongbone-filler/strongbone-filler.component';
import { LandingPageBannerComponent } from './Components/landing-page-banner/landing-page-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    SigninComponent,
    FooterComponent,
    ContactUsComponent,
    PakCititesComponent,
    TestimonialComponent,
    SignupOptionsComponent,
    DailyDairyWorkComponent,
    MilkCategoriesComponent,
    CustomerSignupComponent,
    DairymanSignupComponent,
    StrongboneFillerComponent,
    LandingPageBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
