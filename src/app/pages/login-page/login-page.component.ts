import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/modal/empresa/empresa';
import { Usuario } from 'src/app/modal/usuario/usuario';
import { EmpresaService } from 'src/app/service/empresa/empresa.service';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public usuario = {} as Usuario;
  public usuarios!: Usuario[];
  public empresa = {} as Empresa;
  public empresas!: Empresa[];

  public cpfCnpj = '';
  public senha = '';

  constructor(private router: Router, private usuarioService: UsuarioService, private empresaService: EmpresaService) { }

  ngOnInit(): void {
  }

  verificaCpfCnpj(cpfCnpj: string): void {
    if (cpfCnpj.length === 11) {
      this.getUsuario(cpfCnpj);
    } else if (cpfCnpj.length === 14) {
      this.getEmpresa(cpfCnpj);
    }
  }

  realizaLogin(): void {
    this.verificaCpfCnpj(this.cpfCnpj);
    setTimeout(() => {
      console.log('sleep');
      if ((this.usuario) && (this.cpfCnpj === this.usuario.cpf) && (this.senha === this.usuario.senha)) {
        this.router.navigate([`/home`]);
      } else if ((this.empresa) && (this.cpfCnpj === this.empresa.cnpj) && (this.senha === this.empresa.senha)) {
        this.router.navigate([`/home`]);
      } else {
        // Mensagem de erro
        window.alert('Usuário não encontrado, por favor, realize o cadastro');
        this.router.navigate([`/registrar`]);
      }
    }, 2000);
  }

  getUsuario(cpf: string): void {
    this.usuarioService.getUsuarioByCpf(cpf).subscribe((usuario: Usuario) => {
      this.usuario = usuario;
    });
  }

  getEmpresa(cnpj: string): void {
    this.empresaService.getEmpresaByCnpj(cnpj).subscribe((empresa: Empresa) => {
      this.empresa = empresa;
    });
  }
}
