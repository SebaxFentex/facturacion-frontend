import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Producto } from 'src/app/entidades/producto'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseURL = "http://localhost:8080/productos"

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.baseURL);
  }

  //este metodo nos sirve para registrar un producto
  registrarProducto(producto: Producto): Observable<Object> {
    return this.httpClient.post(this.baseURL + "/registrar", producto);
  }

  //este metodo sirve para actualizar el producto
  actualizarProducto(id: number, producto: Producto): Observable<Object> {
    return this.httpClient.put(this.baseURL + "/" + id, producto);
  }

  //este metodo sirve para obtener o buscar un cliente por id
  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.httpClient.get<Producto>(this.baseURL + "/" + id);
  }

}
