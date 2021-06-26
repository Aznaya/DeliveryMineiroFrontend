import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Opcao } from '../../modal/opcao/opcao';

@Injectable({
  providedIn: 'root'
})
export class OpcaoService {

  url = 'http://localhost:3000/opcao';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getOpcao(): Observable<Opcao[]> {
    return this.httpClient.get<Opcao[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  saveOpcao(opcao: Opcao): Observable<Opcao> {
    return this.httpClient.post<Opcao>(this.url, JSON.stringify(opcao), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line: typedef
  deleteOpcao(idOpcao: number) {
    return this.httpClient.delete<Opcao>(this.url + '/' + idOpcao, this.httpOptions)
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
