import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public cpf_cnpj: String = '';

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
      console.log('CPF:', this.cpf_cnpj)
    } else {
      console.log('CNPJ:', this.cpf_cnpj)
    }
  }

}
