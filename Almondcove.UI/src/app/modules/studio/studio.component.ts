import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import InitAnimateOnScroll from '../../library/invokers/animate-on-scroll';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html'
})
export class StudioComponent implements OnInit, OnDestroy {
  articles: any[] = [];
  isLoading = true;
  loadingBarState: any;

  constructor(
    private httpService: HttpService,
    private cdr: ChangeDetectorRef,
    private loadingBar: LoadingBarService
  ) {}



  ngOnInit(): void {
    this.loadingBarState = this.loadingBar.useRef();
    this.loadingBarState.start();
    try{
      this.fetchStudioItems();
    }
    catch{

    }
    finally{
     // this.loadingBarState.complete();
    }
    
  }
  ngOnDestroy(): void {
    this.loadingBarState.complete();
  }

  fetchStudioItems(): void {
    this.loadingBarState.set(25);
    const url = '/content/studio/home.json';
    this.httpService.fetchFile(url).subscribe((data) => {
      this.articles = data;
      this.isLoading = false;
      this.cdr.detectChanges();

      InitAnimateOnScroll();

      this.loadingBarState.complete();
    });
  }
}
