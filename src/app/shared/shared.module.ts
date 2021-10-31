import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { LateraBarComponent } from './components/latera-bar/latera-bar.component';
import { DialogConfirmComponent } from './components/dialog/dialog-confirm/dialog-confirm.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';

const components = [
  HeaderComponent,
  FooterComponent,
  LateraBarComponent,
  DialogConfirmComponent,
  CalendarComponent,
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
