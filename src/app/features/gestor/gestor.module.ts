import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PainelGestorPageComponent } from './pages/painel-gestor/painel-gestor-page/painel-gestor-page.component';
import { PainelGestorComponentComponent } from './pages/painel-gestor/components/painel-gestor-component/painel-gestor-component.component';
import { ProfileGestorPageComponent } from './pages/profile-gestor/profile-gestor-page/profile-gestor-page.component';
import { AgendamentoGestorPageComponent } from './pages/agendamento-gestor/agendamento-gestor-page/agendamento-gestor-page.component';
import { HistoricoGestorPageComponent } from './pages/historico-gestor/historico-gestor-page/historico-gestor-page.component';

@NgModule({
  declarations: [
    PainelGestorPageComponent,
    PainelGestorComponentComponent,
    ProfileGestorPageComponent,
    AgendamentoGestorPageComponent,
    HistoricoGestorPageComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class GestorModule {}
