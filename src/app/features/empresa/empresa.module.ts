import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileEmpresaPageComponent } from './pages/profile-empresa/profile-empresa-page/profile-empresa-page.component';
import { PainelEmpresaPageComponent } from './pages/painel-empresa/painel-empresa-page/painel-empresa-page.component';
import { PainelEmpresaComponentComponent } from './pages/painel-empresa/components/painel-empresa-component/painel-empresa-component.component';
import { AgendamentoEmpresaPageComponent } from './pages/agendamento-empresa/agendamento-empresa-page/agendamento-empresa-page.component';
import { HistoricoEmpresaPageComponent } from './pages/historico-empresa/historico-empresa-page/historico-empresa-page.component';

@NgModule({
  declarations: [
    ProfileEmpresaPageComponent,
    PainelEmpresaPageComponent,
    PainelEmpresaComponentComponent,
    AgendamentoEmpresaPageComponent,
    HistoricoEmpresaPageComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class EmpresaModule {}
