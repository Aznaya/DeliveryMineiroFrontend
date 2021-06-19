import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { RegistroPageComponent } from './pages/registro-page/registro-page.component';
import { EditarInformacaoPageComponent } from './pages/editar-informacao-page/editar-informacao-page.component';
import { PedidoPageComponent } from './pages/pedido-page/pedido-page.component';
import { HistoricoPageComponent } from './pages/historico-page/historico-page.component';
import { ListaPedidosPageComponent } from './pages/lista-pedidos-page/lista-pedidos-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'entrar',
    component: LoginPageComponent
  },
  {
    path: 'registrar',
    component: RegistroPageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'perfil',
    component: EditarInformacaoPageComponent
  },
  {
    path: 'homega',
    component: LoginPageComponent
  },
  {
    path: 'pedido',
    component: PedidoPageComponent
  },
  {
    path: 'historico',
    component: HistoricoPageComponent
  },
  {
    path: 'lista-pedidos',
    component: ListaPedidosPageComponent
  },
  {
    path: '**',
    component: Error404PageComponent
  }
]

export const RoutingModule = RouterModule.forRoot(routes);
