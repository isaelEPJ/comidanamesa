import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthPagesModule } from './features/auth-pages/auth-pages.module';
import { EmpresaModule } from './features/empresa/empresa.module';
import { GestorModule } from './features/gestor/gestor.module';
import { HomeModule } from './features/home/home.module';
import { UsuarioModule } from './features/usuario/usuario.module';
import { SharedModule } from './shared/shared.module';
import { HistoricoUsuarioPageComponent } from './features/usuarios/pages/historico-usuario/historico-usuario-page/historico-usuario-page.component';

@NgModule({
  declarations: [AppComponent, HistoricoUsuarioPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    AuthPagesModule,
    UsuarioModule,
    GestorModule,
    EmpresaModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
