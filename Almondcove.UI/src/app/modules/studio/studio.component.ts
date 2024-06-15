import { AfterViewInit, Component, OnInit } from '@angular/core';
import InitAnimateOnScroll from '../../library/invokers/animate-on-scroll';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrl: './studio.component.css'
})
export class StudioComponent implements AfterViewInit {

  articles: any[] = [];

  constructor(private httpService: HttpService) { }
  
  ngAfterViewInit(): void {
    InitAnimateOnScroll();
  }


  ngOnInit(): void {
    const url = '/content/studio/home.json';
    this.httpService.fetchFile(url).subscribe(data => {
      this.articles = data;
      console.log(data);
    });
  }

}
