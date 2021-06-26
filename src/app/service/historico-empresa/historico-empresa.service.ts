import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HistoricoEmpresa } from '../../modal/historico-empresa/historico-empresa';
@Injectable({
  providedIn: 'root'
})
export class HistoricoEmpresaService {

  url = 'http://localhost:3000/historico/empresa';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getHistoricoEmpresa(): Observable<HistoricoEmpresa[]> {
    return this.httpClient.get<HistoricoEmpresa[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  saveHistoricoEmpresa(historicoEmpresa: HistoricoEmpresa): Observable<HistoricoEmpresa> {
    return this.httpClient.post<HistoricoEmpresa>(this.url, JSON.stringify(historicoEmpresa), this.httpOptions)
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
