import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modal/usuario/usuario';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { Empresa } from '../../modal/empresa/empresa';
import { EmpresaService } from '../../service/empresa/empresa.service';

@Component({
  selector: 'app-registro-page',
  templateUrl: './registro-page.component.html',
  styleUrls: ['./registro-page.component.css']
})
export class RegistroPageComponent implements OnInit {
  private registroSenha = false;
  private registroCpfCnpj = false;

  public nome = '';
  public cpfCnpj = '';
  public senha = '';
  public confirmarSenha = '';
  public endereco = '';
  public dataPagamento = 5;
  public campoPagamento = false;
  public usuario = {} as Usuario;
  public usuarios!: Usuario[];
  public empresa = {} as Empresa;
  public empresas!: Empresa[];

  constructor(private usuarioService: UsuarioService, private empresaService: EmpresaService) { }

  ngOnInit(): void {
  }

  vallidaCpfCnpj(): void {
    if (this.cpfCnpj.length === 11) {
      this.campoPagamento = false;
      this.registroCpfCnpj = true;
    } else if (this.cpfCnpj.length === 14) {
      this.campoPagamento = true;
      this.registroCpfCnpj = true;
    }
  }

  realizaRegistro(): void {
    if (this.cpfCnpj.length <= 11) {
      console.log('Cadastrando Usuário');
      this.usuario.id_tipo_conta = 1;
      this.usuario.nome = this.nome;
      this.usuario.cpf = this.cpfCnpj;
      this.registroSenha = this.validaSenha(this.senha, this.confirmarSenha);
      this.usuario.endereco = this.endereco;
      if (this.registroSenha && this.registroCpfCnpj) {
        this.usuarioService.saveUsuario(this.usuario).subscribe(() => {
          this.limpaDados();
          window.alert('Usuário Cadastrado');
        });
      }
    } else {
      console.log('Cadastrando Empresa');
      this.empresa.id_tipo_conta = 2;
      this.empresa.nome = this.nome;
      this.empresa.cnpj = this.cpfCnpj;
      this.empresa.endereco = this.endereco;
      this.registroSenha = this.validaSenha(this.senha, this.confirmarSenha);
      if (this.dataPagamento < 0 && this.dataPagamento > 30) {
        this.dataPagamento = 5;
        window.alert('Data de Pagamento Incorreta');
      } else {
        this.empresa.data = this.dataPagamento.toString();
      }
      console.log(this.empresa && this.registroCpfCnpj);
      if (this.registroSenha) {
        this.empresaService.saveEmpresa(this.empresa).subscribe(() => {
          this.limpaDados();
          window.alert('Empresa Cadastrada');
        });
      }
    }
  }

  validaSenha(senha: string, confirmarSenha: string): boolean {
    if (senha === confirmarSenha) {
      this.empresa.senha = senha;
      this.empresa.senha_confirmada = confirmarSenha;
      this.usuario.senha = senha;
      this.usuario.senha_confirmada = confirmarSenha;
      return true;
    } else {
      this.senha = '';
      this.confirmarSenha = '';
      window.alert('Senhas Divergentes');
      return false;
    }
  }

  limpaDados(): void {
    this.nome = '';
    this.cpfCnpj = '';
    this.senha = '';
    this.confirmarSenha = '';
    this.endereco = '';
    this.dataPagamento = 5;
    this.campoPagamento = false;
    this.usuario = {} as Usuario;
    this.empresa = {} as Empresa;
  }

}
