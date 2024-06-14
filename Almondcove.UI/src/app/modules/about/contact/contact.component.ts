import { Component, OnInit } from '@angular/core';
import InitAnimateOnScroll from '../../../library/invokers/animate-on-scroll';
import InitSmoothScroll from '../../../library/invokers/smooth-scroll';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent  implements OnInit{
  ngOnInit(): void {
    InitAnimateOnScroll();
    InitSmoothScroll();
  }

}
