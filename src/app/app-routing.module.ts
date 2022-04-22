import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdolescenciaComponent } from './adolescencia/adolescencia.component';
import { AreaDoClienteComponent } from './area-do-cliente/area-do-cliente.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EmocionalComponent } from './emocional/emocional.component';
import { FloraisAdultosComponent } from './florais-adultos/florais-adultos.component';
import { FloraisAutoconhecimentoComponent } from './florais-autoconhecimento/florais-autoconhecimento.component';
import { FloraisModule } from './florais/florais.module';
import { ListaFloraisPetComponent } from './lista-florais-pet/lista-florais-pet.component';
import { MuralVagasKidsComponent } from './mural-vagas-kids/mural-vagas-kids.component';
import { SegundaInfanciaComponent } from './segunda-infancia/segunda-infancia.component';
import { SobreFloraisComponent } from './sobre-florais/sobre-florais.component';
import { TranstornosComponent } from './transtornos/transtornos.component';


const routes: Routes = [
  {path:'area-do-cliente',component:AreaDoClienteComponent},
  {path:'florais-pets',component:ListaFloraisPetComponent},
  {path:'linha-kids',component:MuralVagasKidsComponent},
  {path:'florais-adultos',component:FloraisAdultosComponent},
  {path:'florais-autoconhecimento',component:FloraisAutoconhecimentoComponent},
  {path:'florais-transtornos',component:TranstornosComponent},
  {path:'florais-emocional',component:EmocionalComponent},
  {path:'segunda-infancia',component:SegundaInfanciaComponent},
  {path:'florais-adolescencia',component:AdolescenciaComponent},
  {path:'sobre-florais',component:SobreFloraisComponent},
  {path:'cadastro',component:CadastroComponent},


  { path: '', pathMatch: 'full', redirectTo:'florais'},
  {
    path: 'florais',
  loadChildren: () => import('./florais/florais.module').then(m => FloraisModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
