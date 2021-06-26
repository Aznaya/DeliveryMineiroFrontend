import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ListaPedidos } from '../../modal/lista-pedidos/lista-pedidos';

@Injectable({
  providedIn: 'root'
})
export class ListaPedidosService {

  url = 'http://localhost:3000/lista-pedido';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getListaPedido(): Observable<ListaPedidos[]> {
    return this.httpClient.get<ListaPedidos[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getListaPedidoById(idListaPedido: number): Observable<ListaPedidos> {
    return this.httpClient.get<ListaPedidos>(this.url + `/${idListaPedido}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  saveListaPedido(listaPedido: ListaPedidos): Observable<ListaPedidos> {
    return this.httpClient.post<ListaPedidos>(this.url, JSON.stringify(listaPedido), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line: typedef
  deleteListaPedido(idListaPedido: number) {
    return this.httpClient.delete<ListaPedidos>(this.url + '/' + idListaPedido, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line: typedef
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
