import { EmocionalComponent } from './emocional/emocional.component';
import { TranstornosComponent } from './transtornos/transtornos.component';
import { FloraisAutoconhecimentoComponent } from './florais-autoconhecimento/florais-autoconhecimento.component';
import { FloraisAdultosComponent } from './florais-adultos/florais-adultos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AreaDoClienteComponent } from './area-do-cliente/area-do-cliente.component';

import { MuralVagasKidsComponent } from './mural-vagas-kids/mural-vagas-kids.component';
import { ListaFloraisPetComponent } from './lista-florais-pet/lista-florais-pet.component';

import { FloraisModule } from './florais/florais.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'florais-pets',component:ListaFloraisPetComponent},
  {path:'linha-kids',component:MuralVagasKidsComponent},
  {path:'florais-adultos',component:FloraisAdultosComponent},
  {path:'florais-autoconhecimento',component:FloraisAutoconhecimentoComponent},
  {path:'florais-transtornos',component:TranstornosComponent},
  {path:'florais-emocional',component:EmocionalComponent},
  {path:'area-do-cliente',component:AreaDoClienteComponent},
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
