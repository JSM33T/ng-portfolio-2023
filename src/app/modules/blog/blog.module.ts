import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserComponent } from './browser/browser.component';
import { RouterModule, Routes } from '@angular/router';
import { BlogLoaderComponent } from './blog-loader/blog-loader.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', component: BrowserComponent },
  { path: ':slug', component: BlogLoaderComponent },
];

@NgModule({
  declarations: [BrowserComponent, BlogLoaderComponent],
  imports: [CommonModule,HttpClientModule,RouterModule.forChild(routes)],
})
export class BlogModule { }
