import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-page',
  templateUrl: './registro-page.component.html',
  styleUrls: ['./registro-page.component.css']
})
export class RegistroPageComponent implements OnInit {
  public nome = '';
  public cpfCnpj = '';
  public senha = '';
  public confirmarSenha = '';
  public endereco = '';
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

  realizaLogin(): void {
    console.log('BOTÃO PRESSIONADO');
    if (this.cpfCnpj.length <= 11) {
      console.log('Usuário Cadastrado:');
      console.log('Nomes:', this.nome);
      console.log('CPF:', this.cpfCnpj);
      console.log('Senha:', this.senha);
      console.log('Senha Confirmada:', this.confirmarSenha);
    } else {
      console.log('Empresa Cadastrada:');
      console.log('Nomes:', this.nome);
      console.log('CNPJ:', this.cpfCnpj);
      console.log('Senha:', this.senha);
      console.log('Senha Confirmada:', this.confirmarSenha);
    }
  }

}
