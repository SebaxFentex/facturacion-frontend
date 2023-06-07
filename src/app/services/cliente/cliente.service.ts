import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Cliente } from 'src/app/entidades/cliente'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseURL = "http://localhost:8080/clientes"

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.baseURL);
  }

  //este metodo nos sirve para registrar un cliente
  registrarCliente(cliente: Cliente): Observable<Object> {
    console.log(cliente);

    return this.httpClient.post(this.baseURL + "/registrar", cliente);
  }

  //este metodo sirve para actualizar el cliente
  actualizarCliente(id: number, cliente: Cliente): Observable<Object> {
    return this.httpClient.put(this.baseURL + "/" + id, cliente);
  }

  //este metodo sirve para obtener o buscar un cliente por id
  obtenerClientePorId(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.baseURL + "/" + id);
  }

  //este metodo sirve para obtener o buscar un cliente por id
  obtenerClientePorIdentificacion(datos: String): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.baseURL + "/buscar/" + datos);
  }

}
