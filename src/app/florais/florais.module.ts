import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FloraisRoutingModule } from './florais-routing.module';
import { TabelaFloraisComponent } from './tabela-florais/tabela-florais.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    TabelaFloraisComponent
  ],
  imports: [
    CommonModule,
    FloraisRoutingModule,
    MatTableModule
  ]
})
export class FloraisModule { }
