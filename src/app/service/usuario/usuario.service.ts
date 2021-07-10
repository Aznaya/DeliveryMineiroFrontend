import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Usuario } from '../../modal/usuario/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:3000/usuario';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getUsuarioByCpf(cpf: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.url + `/${cpf}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  saveUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.url, JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(this.url + '/' + usuario.id_usuario, JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line: typedef
  deleteUsuario(idUsuario: number) {
    return this.httpClient.delete<Usuario>(this.url + '/' + idUsuario, this.httpOptions)
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
