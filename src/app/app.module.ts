import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';   
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNewsComponent } from './top-news/top-news.component';
import { NewsapiService } from './service/newsapi.service';
import { ShortPipe } from './short.pipe';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { EntertainmentNewsComponent } from './entertainment-news/entertainment-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { HealthNewsComponent } from './health-news/health-news.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNewsComponent,
    ShortPipe,
    TechNewsComponent,
    EntertainmentNewsComponent,
    SportsNewsComponent,
    HealthNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule    //for connecting 3rd party API
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
