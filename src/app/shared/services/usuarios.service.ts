import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../models/usuario.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public readonly url: string;
  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost:3000";
  }

  public getAllUsers(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.url + '/usuarios');
  }

  public deleteUser(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.delete<Usuario>(this.url + /usuarios/ + usuario.id);
  }
}
