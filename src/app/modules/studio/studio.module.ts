import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioComponent } from './studio.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlbumLoaderComponent } from './album-loader/album-loader.component';

const routes: Routes = [
  { path: '', component: StudioComponent },
  { path: ':slug', component: AlbumLoaderComponent }
];


@NgModule({
  declarations: [
    StudioComponent,
    AlbumLoaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class StudioModule { }
