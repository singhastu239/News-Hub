import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopNewsComponent } from './top-news/top-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { EntertainmentNewsComponent } from './entertainment-news/entertainment-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { HealthNewsComponent } from './health-news/health-news.component';

const routes: Routes = [
  { path: '', component: TopNewsComponent},
  { path: 'tech', component: TechNewsComponent},
  { path: 'entertainment', component: EntertainmentNewsComponent},
  { path: 'sports', component: SportsNewsComponent},
  { path: 'health', component: HealthNewsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
