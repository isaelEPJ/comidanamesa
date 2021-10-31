import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PainelUsuarioPageComponent } from './pages/painel-usuario/painel-usuario-page/painel-usuario-page.component';
import { PainelUsuarioContentComponent } from './pages/painel-usuario/components/painel-usuario-content/painel-usuario-content.component';
import { ProfileUsuarioPageComponent } from './pages/profile-usuario/profile-usuario-page/profile-usuario-page.component';
import { AgendamentoUsuarioPageComponent } from './pages/agendamento-usuario/agendamento-usuario-page/agendamento-usuario-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    PainelUsuarioPageComponent,
    PainelUsuarioContentComponent,
    ProfileUsuarioPageComponent,
    AgendamentoUsuarioPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    SharedModule,
  ],
})
export class UsuarioModule {}
