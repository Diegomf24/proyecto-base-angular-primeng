import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../../shared/models/usuario.model";
import {Centrales} from "../models/centrales.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CentralesService {

  public url: string;

  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost:3000";
  }


  public getAllCentrals(): Observable<Centrales[]> {
    return this.httpClient.get<Centrales[]>(this.url + '/centrales');
  }

}
