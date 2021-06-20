import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  private CPFTESTE = '12345678910';
  private SENHATESTE = 'Abobora';

  public cpfCnpj = '';
  public senha = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  vallidaCpfCnpj(): void {
    if (this.cpfCnpj.length >= 1 && this.cpfCnpj.length <= 11) {
      console.log('CPF:', this.cpfCnpj);
    } else if (this.cpfCnpj.length <= 14) {
      console.log('CNPJ:', this.cpfCnpj);
    }
  }

  realizaLogin(): void {
    if ((this.cpfCnpj === this.CPFTESTE) && (this.senha === this.SENHATESTE)) {
      // Realiza o login
      this.router.navigate([`/home`]);
    } else {
      // Mensagem de erro
      window.alert('Usuário não encontrado, por favor, realize o cadastro');
      this.router.navigate([`/registrar`]);
    }
  }

}
