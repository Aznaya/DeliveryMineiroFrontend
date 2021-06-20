import { Component, OnInit } from '@angular/core';
import { ListaPedidos } from 'src/app/modal/lista-pedidos/lista-pedidos';

@Component({
  selector: 'app-lista-pedidos-page',
  templateUrl: './lista-pedidos-page.component.html',
  styleUrls: ['./lista-pedidos-page.component.css']
})
export class ListaPedidosPageComponent implements OnInit {
  public pedidos = [
    {
      nome: 'Solaire de Astora'
    },
    {
      nome: 'Lautrec de Carim'
    },
    {
      nome: 'Shiva do Oriente'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
