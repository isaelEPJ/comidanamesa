import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './features/auth-pages/signin/signin.component';
import { SignupOptionsComponent } from './features/auth-pages/signup/pages/signup-options/signup-options.component';
import { SignupPageComponent } from './features/auth-pages/signup/pages/signup-page/signup-page.component';
import { AgendamentoEmpresaPageComponent } from './features/empresa/pages/agendamento-empresa/agendamento-empresa-page/agendamento-empresa-page.component';
import { HistoricoEmpresaPageComponent } from './features/empresa/pages/historico-empresa/historico-empresa-page/historico-empresa-page.component';
import { PainelEmpresaPageComponent } from './features/empresa/pages/painel-empresa/painel-empresa-page/painel-empresa-page.component';
import { ProfileEmpresaPageComponent } from './features/empresa/pages/profile-empresa/profile-empresa-page/profile-empresa-page.component';
import { AgendamentoGestorPageComponent } from './features/gestor/pages/agendamento-gestor/agendamento-gestor-page/agendamento-gestor-page.component';
import { HistoricoGestorPageComponent } from './features/gestor/pages/historico-gestor/historico-gestor-page/historico-gestor-page.component';
import { PainelGestorPageComponent } from './features/gestor/pages/painel-gestor/painel-gestor-page/painel-gestor-page.component';
import { ProfileGestorPageComponent } from './features/gestor/pages/profile-gestor/profile-gestor-page/profile-gestor-page.component';
import { HomePageComponent } from './features/home/home-page/home-page.component';
import { AgendamentoUsuarioPageComponent } from './features/usuario/pages/agendamento-usuario/agendamento-usuario-page/agendamento-usuario-page.component';
import { PainelUsuarioPageComponent } from './features/usuario/pages/painel-usuario/painel-usuario-page/painel-usuario-page.component';
import { ProfileUsuarioPageComponent } from './features/usuario/pages/profile-usuario/profile-usuario-page/profile-usuario-page.component';
import { HistoricoUsuarioPageComponent } from './features/usuarios/pages/historico-usuario/historico-usuario-page/historico-usuario-page.component';

const routes: Routes = [
  // paginas compartilhadas
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: SigninComponent },
  { path: 'register-option', component: SignupOptionsComponent },
  { path: 'register/:id', component: SignupPageComponent },

  // paginas do usuario
  { path: 'usuario/painel', component: PainelUsuarioPageComponent },
  { path: 'usuario/perfil', component: ProfileUsuarioPageComponent },
  { path: 'usuario/agendamento', component: AgendamentoUsuarioPageComponent },
  { path: 'usuario/historico', component: HistoricoUsuarioPageComponent },

  // paginas do gestor
  { path: 'gestor/perfil', component: ProfileGestorPageComponent },
  { path: 'gestor/painel', component: PainelGestorPageComponent },
  { path: 'gestor/agendamento', component: AgendamentoGestorPageComponent },
  { path: 'gestor/historico', component: HistoricoGestorPageComponent },

  // paginas da empresa
  { path: 'empresa/perfil', component: ProfileEmpresaPageComponent },
  { path: 'empresa/painel', component: PainelEmpresaPageComponent },
  { path: 'empresa/agendamento', component: AgendamentoEmpresaPageComponent },
  { path: 'empresa/historico', component: HistoricoEmpresaPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
