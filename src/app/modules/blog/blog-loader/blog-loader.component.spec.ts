import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLoaderComponent } from './blog-loader.component';

describe('AlbumLoaderComponent', () => {
  let component: BlogLoaderComponent;
  let fixture: ComponentFixture<BlogLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
