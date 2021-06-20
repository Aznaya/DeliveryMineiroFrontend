import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-informacao-page',
  templateUrl: './editar-informacao-page.component.html',
  styleUrls: ['./editar-informacao-page.component.css']
})
export class EditarInformacaoPageComponent implements OnInit {
  public nome = 'Oscar, Cavaleiro de Astora';
  public cpfCnpj = '12345678910';
  public senha = 'Abobora123';
  public confirmarSenha = 'Abobora123';
  public endereco = 'Anor Londor, 115, Atrás dos Gigantes, se chegar no salão principal passou';
  public dataPagamento = '';
  public campoPagamento = false;

  constructor() { }

  ngOnInit(): void {
  }

  vallidaCpfCnpj(): void {
    if (this.cpfCnpj.length >= 0 && this.cpfCnpj.length <= 11) {
      console.log('CPF:', this.cpfCnpj);
      this.campoPagamento = false;
    } else if (this.cpfCnpj.length <= 14) {
      console.log('CNPJ:', this.cpfCnpj);
      this.campoPagamento = true;
    }
  }

  atualizaCadastro(): void {
    console.log('BOTÃO PRESSIONADO');
    if (this.cpfCnpj.length <= 11) {
      console.log('Usuário Cadastrado:');
      console.log('Nomes:', this.nome);
      console.log('CPF:', this.cpfCnpj);
      console.log('Senha:', this.senha);
      console.log('Senha Confirmada:', this.confirmarSenha);
      console.log('Data Pagamento:', this.dataPagamento);
    } else {
      console.log('Empresa Cadastrada:');
      console.log('Nomes:', this.nome);
      console.log('CNPJ:', this.cpfCnpj);
      console.log('Senha:', this.senha);
      console.log('Senha Confirmada:', this.confirmarSenha);
      console.log('Data Pagamento:', this.dataPagamento);
    }
  }

}
