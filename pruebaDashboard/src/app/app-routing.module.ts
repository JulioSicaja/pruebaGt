import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesCodeComponent } from './pages/countries-code/countries-code.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  // { path: 'inicio', component:  HomeComponent},
  { path: 'prueba', component: PruebaComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'inicio', component: CountriesComponent },
  { path: 'registroCod', component: CountriesCodeComponent },
  { path: 'registroCod/:id', component: CountriesCodeComponent },
  { path: '**', pathMatch: 'full', redirectTo: ''}  //Cualquiera otra ruta lo redirecciona a la página principal

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
