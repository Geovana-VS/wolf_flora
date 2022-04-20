import { Component, OnInit } from '@angular/core';

@Component({
  selector: '',
  templateUrl: './tabela-florais.component.html',
  styleUrls: ['./tabela-florais.component.scss']
})
export class TabelaFloraisComponent implements OnInit {

  florais: any[] = [];

  constructor() {
    this.florais =[]
  }

  ngOnInit(): void {
  }

}
