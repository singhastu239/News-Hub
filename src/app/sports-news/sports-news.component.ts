import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent implements OnInit {

  constructor(private api: NewsapiService) { }
  topSportsData: any[] = [];

  ngOnInit(): void {
    this.api.sportsHeadlines().subscribe(result => {
      console.log(result);
      this.topSportsData = result.articles;
    })
  }

}

