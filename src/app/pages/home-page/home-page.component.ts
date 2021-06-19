import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public perfil_administrador: boolean = false;
  public perfil: Number = 1;

  constructor() { }

  ngOnInit(): void {
    this.verificaPerfil(this.perfil);
  }

  verificaPerfil(perfil:Number): void {
    if (perfil === 1) {
      this.perfil_administrador = true;
    } else {
      this.perfil_administrador = false;
    }
  }

}
