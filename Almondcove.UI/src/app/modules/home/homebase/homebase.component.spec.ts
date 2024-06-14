import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebaseComponent } from './homebase.component';

describe('HomebaseComponent', () => {
  let component: HomebaseComponent;
  let fixture: ComponentFixture<HomebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomebaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
