import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/entidades/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: any[];
  productoBuscar:Producto = new Producto();

  constructor(private productoServicio: ProductoService,  private router: Router) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  actualizarProducto(id: number) {
    this.router.navigate(['actualizar-producto', id]);
  }

  registrarProducto(){

    this.router.navigate(['registrar-producto']);
  }

  private obtenerProductos() {
    this.productoServicio.obtenerListaDeProductos().subscribe(dato => {
      this.productos = dato;
    });
  }

  verDetallesDelProducto(producto:Producto) {
    let ruta = producto.id;
    this.router.navigate(['buscar-producto', ruta]);
  }

  actualizarIdProductoBuscar(event: Event){
    const element = event.target as HTMLInputElement;
    this.productoBuscar.id = +element.value;
  }
}
