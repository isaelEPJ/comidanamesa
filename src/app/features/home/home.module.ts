import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContentHomeComponent } from './components/content-home/content-home.component';

@NgModule({
  declarations: [HomePageComponent, ContentHomeComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class HomeModule {}
