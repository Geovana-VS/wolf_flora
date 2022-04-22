import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; /* importa toobar*/
import {MatIconModule} from '@angular/material/icon';
import { ListaFloraisPetComponent } from './lista-florais-pet/lista-florais-pet.component';
import { MenuFloraisComponent } from './menu-florais/menu-florais.component';
import { RodapeComponent } from './rodape/rodape.component';
import { MuralVagasKidsComponent } from './mural-vagas-kids/mural-vagas-kids.component';
import { AreaDoClienteComponent } from './area-do-cliente/area-do-cliente.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FloraisAdultosComponent } from './florais-adultos/florais-adultos.component';
import { FloraisAutoconhecimentoComponent } from './florais-autoconhecimento/florais-autoconhecimento.component';
import { TranstornosComponent } from './transtornos/transtornos.component';
import { EmocionalComponent } from './emocional/emocional.component';

import { SobreFloraisComponent } from './sobre-florais/sobre-florais.component';
import { SegundaInfanciaComponent } from './segunda-infancia/segunda-infancia.component';
import { AdolescenciaComponent } from './adolescencia/adolescencia.component';/* importa icones*/

@NgModule({
  declarations: [
    AppComponent,
    ListaFloraisPetComponent,
    MenuFloraisComponent,
    RodapeComponent,
    MuralVagasKidsComponent,
    AreaDoClienteComponent,
    CadastroComponent,
    FloraisAdultosComponent,
    FloraisAutoconhecimentoComponent,
    TranstornosComponent,
    EmocionalComponent,

    SobreFloraisComponent,
    SegundaInfanciaComponent,
    AdolescenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
