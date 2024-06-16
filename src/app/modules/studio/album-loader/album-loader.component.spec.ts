import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumLoaderComponent } from './album-loader.component';

describe('AlbumLoaderComponent', () => {
  let component: AlbumLoaderComponent;
  let fixture: ComponentFixture<AlbumLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
