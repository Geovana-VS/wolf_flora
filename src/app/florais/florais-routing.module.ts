import { TabelaFloraisComponent } from './tabela-florais/tabela-florais.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {path: '',component: TabelaFloraisComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloraisRoutingModule { }
