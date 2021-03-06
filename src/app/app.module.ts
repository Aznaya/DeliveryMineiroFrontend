import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RoutingModule } from './app.router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { RegistroPageComponent } from './pages/registro-page/registro-page.component';
import { PedidoPageComponent } from './pages/pedido-page/pedido-page.component';
import { HistoricoPageComponent } from './pages/historico-page/historico-page.component';
import { EditarInformacaoPageComponent } from './pages/editar-informacao-page/editar-informacao-page.component';
import { ListaPedidosPageComponent } from './pages/lista-pedidos-page/lista-pedidos-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    Error404PageComponent,
    RegistroPageComponent,
    PedidoPageComponent,
    HistoricoPageComponent,
    EditarInformacaoPageComponent,
    ListaPedidosPageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
