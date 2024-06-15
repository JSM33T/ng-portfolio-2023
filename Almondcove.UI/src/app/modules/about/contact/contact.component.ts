import { Component, OnDestroy, OnInit } from '@angular/core';
import InitAnimateOnScroll from '../../../library/invokers/animate-on-scroll';
import InitSmoothScroll from '../../../library/invokers/smooth-scroll';
import { LoadingBarService } from '@ngx-loading-bar/core';
import acToast from '../../../library/modals/notification-modal';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent  implements OnInit,OnDestroy{

loadingBarState : any;


constructor(private loadingBar: LoadingBarService){}

  ngOnInit(): void {
    this.loadingBarState = this.loadingBar.useRef();
    
    this.loadingBarState.start();
    InitAnimateOnScroll();
    InitSmoothScroll();
    this.loadingBarState.complete();
  }

  ngOnDestroy(): void {
    this.loadingBarState.complete();
  }
  haha(): void {
   acToast('wait','the component is still in the oven')
  }
}


