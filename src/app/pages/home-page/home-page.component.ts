import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public perfilAdministrador = false;
  public perfil = 1;

  constructor() { }

  ngOnInit(): void {
    this.verificaPerfil(this.perfil);
  }

  verificaPerfil(perfil: number): void {
    if (perfil === 1) {
      this.perfilAdministrador = true;
    } else {
      this.perfilAdministrador = false;
    }
  }

}
