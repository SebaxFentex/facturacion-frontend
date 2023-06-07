import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { TipoIdentificacion } from 'src/app/entidades/tipoIdentificacion';

@Injectable({
  providedIn: 'root'
})
export class TipoIdService {

  private baseURL = "http://localhost:8080/tiposId"

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeTiposId(): Observable<TipoIdentificacion[]> {
    return this.httpClient.get<TipoIdentificacion[]>(this.baseURL);
  }

}
