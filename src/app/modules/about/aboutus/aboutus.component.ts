import { Component, OnInit } from '@angular/core';
import InitAnimateOnScroll from '../../../library/invokers/animate-on-scroll';
import InitSmoothScroll from '../../../library/invokers/smooth-scroll';
import initParallax from '../../../library/invokers/parallax';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent implements OnInit{

  loadingBarState : any;
  constructor(private loadingBar: LoadingBarService){}
  ngOnInit(): void {
    this.loadingBarState = this.loadingBar.useRef();
    
    this.loadingBarState.start();
    InitAnimateOnScroll();
    InitSmoothScroll();
    initParallax();
    this.loadingBarState.complete();
  }

  socialLinks = [
    { platform: 'Instagram', icon: 'ai-instagram', url: 'https://instagram.com/jsm33t' },
    { platform: 'Facebook', icon: 'ai-facebook', url: 'https://facebook.com/iamjsm33t' },
    { platform: 'YouTube', icon: 'ai-github', url: 'https://github.com/jsm33t' }
  ];
  

}
