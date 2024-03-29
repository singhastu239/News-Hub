import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-entertainment-news',
  templateUrl: './entertainment-news.component.html',
  styleUrls: ['./entertainment-news.component.css']
})
export class EntertainmentNewsComponent implements OnInit {

  constructor(private api: NewsapiService) { }
  topEntertainmentData: any[] = [];

  ngOnInit(): void {
    this.api.entertainmentHeadlines().subscribe(result => {
      console.log(result);
      this.topEntertainmentData = result.articles;
    })
  }

}