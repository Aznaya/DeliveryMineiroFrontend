import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-page',
  templateUrl: './pedido-page.component.html',
  styleUrls: ['./pedido-page.component.css']
})
export class PedidoPageComponent implements OnInit {
  public dinheiro: boolean = false;
  public cartao: boolean = false;
  public troco: Number = 0;
  public bandeira: String = '';
  public bandeiras = [
    'Visa',
    'Mastercard',
    'American Express',
    'Elo',
    'Hipercard',
    'Dinners Club',
    'Sorocred'
  ];
  public endereco: String = 'Anor Londor, 115, Atrás dos Gigantes, se chegar no salão principal passou';

  constructor() { }

  ngOnInit(): void {
  }

  tipoPagamento(ehDinheiro: boolean): void {
    if (ehDinheiro) {
      this.dinheiro = true;
      this.cartao = false;
    } else {
      this.dinheiro = false;
      this.cartao = true;
    }
  }

  realizarPedido(): void {
    console.log('Realizando Pedido');
    console.log('O pagamento será em ');
    if (this.dinheiro) {
      console.log('Dinheiro com troco de ', this.troco)
    }
    if (this.cartao) {
      console.log('Cartão com bandeira da ', this.bandeira)
    }
    console.log('No endereço: ', this.endereco)
  }
}
