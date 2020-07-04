import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LandingPageBannerComponent } from './Components/landing-page-banner/landing-page-banner.component';
import { DailyDairyWorkComponent } from './Components/daily-dairy-work/daily-dairy-work.component';
import { MilkCategoriesComponent } from './Components/milk-categories/milk-categories.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, LandingPageBannerComponent, DailyDairyWorkComponent, MilkCategoriesComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
