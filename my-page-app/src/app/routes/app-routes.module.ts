import { NgModule } from "@angular/core";
import { PreloadAllModules, Routes, RouterModule } from "@angular/router";
import { AboutMeComponent } from "../about-me/about-me.component";
import { HomeComponent } from "../home/home.component";
import { MySkilsComponent } from "../my-skils/my-skils.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'SobreMin', component: AboutMeComponent },
    { path: 'MeusSkills', component: MySkilsComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {
        preloadingStrategy: PreloadAllModules
    })],
})
export class AppRoutes{}