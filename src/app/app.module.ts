import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PakCititesComponent } from './Components/pak-citites/pak-citites.component';
import { TestimonialComponent } from './Components/testimonial/testimonial.component';
import { MilkCategoriesComponent } from './Components/milk-categories/milk-categories.component';
import { DailyDairyWorkComponent } from './Components/daily-dairy-work/daily-dairy-work.component';
import { StrongboneFillerComponent } from './Components/strongbone-filler/strongbone-filler.component';
import { LandingPageBannerComponent } from './Components/landing-page-banner/landing-page-banner.component';
import { SignupOptionsComponent } from './Components/signup-options/signup-options.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    PakCititesComponent,
    TestimonialComponent,
    DailyDairyWorkComponent,
    MilkCategoriesComponent,
    StrongboneFillerComponent,
    LandingPageBannerComponent,
    SignupOptionsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
