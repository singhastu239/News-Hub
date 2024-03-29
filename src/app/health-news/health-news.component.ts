import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-health-news',
  templateUrl: './health-news.component.html',
  styleUrls: ['./health-news.component.css']
})
export class HealthNewsComponent implements OnInit {

  constructor(private api: NewsapiService) { }
  topHealthData: any[] = [];

  ngOnInit(): void {
    this.api.healthHeadlines().subscribe(result => {
      console.log(result);
      this.topHealthData = result.articles;
    })
  }

}

