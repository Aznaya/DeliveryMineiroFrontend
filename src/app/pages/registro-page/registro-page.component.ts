import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-page',
  templateUrl: './registro-page.component.html',
  styleUrls: ['./registro-page.component.css']
})
export class RegistroPageComponent implements OnInit {
  public nome: String = '';
  public cpf_cnpj: String = '';
  public senha: String = '';
  public confirmar_senha: String = '';
  public endereco: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  vallidaCpfCnpj(): void {
    if (this.cpf_cnpj.length >= 1 && this.cpf_cnpj.length <= 11) {
      console.log('CPF:', this.cpf_cnpj)
    } else if (this.cpf_cnpj.length <= 14) {
      console.log('CNPJ:', this.cpf_cnpj)
    }
  }

  realizaLogin(): void {
    console.log('BOTÃO PRESSIONADO')
    if (this.cpf_cnpj.length <= 11) {
      console.log('Usuário Cadastrado:')
      console.log('Nomes:', this.nome)
      console.log('CPF:', this.cpf_cnpj)
      console.log('Senha:', this.senha)
      console.log('Senha Confirmada:', this.confirmar_senha)
    } else {
      console.log('Empresa Cadastrada:')
      console.log('Nomes:', this.nome)
      console.log('CNPJ:', this.cpf_cnpj)
      console.log('Senha:', this.senha)
      console.log('Senha Confirmada:', this.confirmar_senha)
    }
  }

}
