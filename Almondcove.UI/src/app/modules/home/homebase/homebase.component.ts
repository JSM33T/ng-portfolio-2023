import { Component, OnInit } from '@angular/core';
import acToast from '../../../library/modals/notification-modal';
import InitSmoothScroll from '../../../library/invokers/smooth-scroll';
import InitAnimateOnScroll from '../../../library/invokers/animate-on-scroll';
import initParallax from '../../../library/invokers/parallax';
import Initswiper from '../../../library/invokers/swiper';
import InitLightGallery from '../../../library/invokers/light-gallery';
import { LoadingBarService } from '@ngx-loading-bar/core';


@Component({
  selector: 'app-homebase',
  templateUrl: './homebase.component.html',
  styleUrl: './homebase.component.css'
})
export class HomebaseComponent implements OnInit{
  loadingBarState: any;

  constructor( private loadingBar: LoadingBarService) {}
  ngOnInit(): void {
    this.loadingBarState = this.loadingBar.useRef();
    this.loadingBarState.start();
    InitSmoothScroll();
    InitAnimateOnScroll();
    initParallax();
    Initswiper();
    InitLightGallery();
    this.loadingBarState.complete();
  }

 
  
  accordionItems = [
    { title: 'Accordion Item #1', content: 'This is the first item\'s accordion body.' },
    { title: 'Accordion Item #2', content: 'This is the second item\'s accordion body.' },
    { title: 'Accordion Item #3', content: 'This is the third item\'s accordion body.' }
  ];
}
