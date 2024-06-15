import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioComponent } from './studio.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: StudioComponent }
];


@NgModule({
  declarations: [
    StudioComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class StudioModule { }
