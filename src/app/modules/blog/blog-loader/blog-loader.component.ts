import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import initParallax from '../../../library/invokers/parallax';
import InitAnimateOnScroll from '../../../library/invokers/animate-on-scroll';
import { LoadingBarService } from '@ngx-loading-bar/core';
import Initswiper from '../../../library/invokers/swiper';
import InitSmoothScroll from '../../../library/invokers/smooth-scroll';

@Component({
  selector: 'app-blog-loader',
  templateUrl: './blog-loader.component.html',
  styles: ["@import 'aos/dist/aos.css';"]
})
export class BlogLoaderComponent implements OnInit {
  htmlContent: SafeHtml = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private loadingBar: LoadingBarService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.loadHtml(slug);
        //this.cdr.detectChanges();
        
        setTimeout(() => {
          initParallax();
        }, 500);
        Initswiper();
        InitSmoothScroll();
        InitAnimateOnScroll();
        
        
      }
    });
  }

  loadHtml(slug: string): void {
    const filePath = `assets/${slug}.html`;
    this.http.get(filePath, { responseType: 'text' })
      .subscribe(
        content => {
          this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(content);
        },
        error => console.error('Error loading HTML:', error)
      );
  }
}
