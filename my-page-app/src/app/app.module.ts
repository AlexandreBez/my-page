import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { MySkilsComponent } from './my-skils/my-skils.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AppRoutes } from './routes/app-routes.module';
import { RouterModule } from '@angular/router';
import { ShortenPipe } from './shared/pipes/shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    HomeComponent,
    MySkilsComponent,
    SpinnerComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
