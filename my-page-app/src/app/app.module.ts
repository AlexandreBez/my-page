import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeusCertificadosComponent } from './meus-certificados/meus-certificados.component';
import { HomeComponent } from './home/home.component';
import { MeuConhecimentoComponent } from './meu-conhecimento/meu-conhecimento.component';
import { AppRoutes } from './routes/app-routes.module';
import { RouterModule } from '@angular/router';
import { CertificadoLinguagensComponent } from './certificado-linguagens/certificado-linguagens.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  declarations: [
    AppComponent,
    MeusCertificadosComponent,
    HomeComponent,
    MeuConhecimentoComponent,
    CertificadoLinguagensComponent,
    ProjetosComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
