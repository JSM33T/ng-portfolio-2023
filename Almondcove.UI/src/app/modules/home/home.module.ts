import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomebaseComponent } from './homebase/homebase.component';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from '../../shared/accordion/accordion.component';


const routes: Routes = [
  { path: '', component: HomebaseComponent }
];

@NgModule({
  declarations: [
    HomebaseComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeModule { }
