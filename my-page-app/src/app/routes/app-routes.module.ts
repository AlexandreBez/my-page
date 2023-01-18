import { NgModule } from "@angular/core";
import { PreloadAllModules, Routes, RouterModule } from "@angular/router";
import { MeusCertificadosComponent } from "../meus-certificados/meus-certificados.component";
import { HomeComponent } from "../home/home.component";
import { MeuConhecimentoComponent } from "../meu-conhecimento/meu-conhecimento.component";
import { CertificadoLinguagensComponent } from "../certificado-linguagens/certificado-linguagens.component";
import { ProjetosComponent } from "../projetos/projetos.component";
import { DummyComponent } from "../dummy/dummy.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'MeusCertificados', component: MeusCertificadosComponent },
    { path: 'MeuConhecimento', component: MeuConhecimentoComponent },
    { path: 'CertificadoDeLinguagens', component: CertificadoLinguagensComponent },
    { path: 'Projetos', component: ProjetosComponent },
    { path: 'Dummy', component: DummyComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {
        preloadingStrategy: PreloadAllModules
    })],
})
export class AppRoutes{}