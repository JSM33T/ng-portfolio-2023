import { AfterViewInit, Component, OnInit } from '@angular/core';
import InitAnimateOnScroll from '../../../library/invokers/animate-on-scroll';
import InitSmoothScroll from '../../../library/invokers/smooth-scroll';

interface FAQItem {
  id: string;
  heading: string;
  question: string;
  answer: string;
  expanded: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit,AfterViewInit {
  faqs: FAQItem[] = [
    {
      id: 'questionOne',
      heading: 'headingOne',
      question: 'Is there a free trial?',
      answer: 'Adipiscing sagittis neque egestas id platea accumsan. Morbi inpa platea urna curabitur habitant pulvinar lacinia neque. Netus gravida amet, aliquam quam turpis aliquet cras. Find aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu nulla pariatur. Sit amet, adipiscing elit.',
      expanded: true
    },
    {
      id: 'questionTwo',
      heading: 'headingTwo',
      question: 'How do refunds work?',
      answer: 'Quisque rutrum sit amet magna sit amet tristique. Vivamus rhoncus ac purus vitae convallis. Aliquam erat volutpat. Proin egestas, mauris ut semper semper, ipsum felis mattis ligula, et porttitor ante arcu nec ante. Aliquam congue est eu turpis sollicitudin, et ullamcorper tortor aliquam.',
      expanded: false
    }
  ];

  constructor() {}
  ngOnInit(): void {
    console.log('ONINIT CALLED');
  }
  
  ngAfterViewInit(): void {
    console.log('AFTERVIEWINIT CALLED');
    
    InitSmoothScroll();
    InitAnimateOnScroll();
  }

  
}
