import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NewsapiService {
  constructor(private h: HttpClient) { }

  topNews='https://newsapi.org/v2/top-headlines?country=in&apiKey=6965b26a3dd74b2a9cb209212562f2ae';

  techNews='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=6965b26a3dd74b2a9cb209212562f2ae'

  entertainmentNews='https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=6965b26a3dd74b2a9cb209212562f2ae'
  
  sportsNews='https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=6965b26a3dd74b2a9cb209212562f2ae'

  healthNews='https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=6965b26a3dd74b2a9cb209212562f2ae'

  topHeadlines(): Observable<any>{
    return this.h.get(this.topNews);
    
  }
  techHeadlines(): Observable<any>{
    return this.h.get(this.techNews);
  }
  entertainmentHeadlines(): Observable<any>{
    return this.h.get(this.entertainmentNews);
  }
  sportsHeadlines(): Observable<any>{
    return this.h.get(this.sportsNews);
  }
  healthHeadlines(): Observable<any>{
    return this.h.get(this.healthNews);
  }

  
}