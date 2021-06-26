import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Empresa } from '../../modal/empresa/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url = 'http://localhost:3000/empresa';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getEmpresaById(idEmpresa: number): Observable<Empresa> {
    return this.httpClient.get<Empresa>(this.url + `/${idEmpresa}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  saveEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.httpClient.post<Empresa>(this.url, JSON.stringify(empresa), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  updateEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.httpClient.put<Empresa>(this.url + '/' + empresa.id_empresa, JSON.stringify(empresa), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line: typedef
  deleteEmpresa(idEmpresa: number) {
    return this.httpClient.delete<Empresa>(this.url + '/' + idEmpresa, this.httpOptions)
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
