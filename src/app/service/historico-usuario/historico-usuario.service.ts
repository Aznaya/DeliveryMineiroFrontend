import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HistoricoUsuario } from '../../modal/historico-usuario/historico-usuario';

@Injectable({
  providedIn: 'root'
})
export class HistoricoUsuarioService {

  url = 'http://localhost:3000/historico/usuario';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getHistoricoUsuario(): Observable<HistoricoUsuario[]> {
    return this.httpClient.get<HistoricoUsuario[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  saveHistoricoUsuario(historicoUsuario: HistoricoUsuario): Observable<HistoricoUsuario> {
    return this.httpClient.post<HistoricoUsuario>(this.url, JSON.stringify(historicoUsuario), this.httpOptions)
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
