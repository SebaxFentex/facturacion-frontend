import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/entidades/cliente';
import { Producto } from 'src/app/entidades/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit{
  constructor(private productoServicio: ProductoService, private router: Router, private route: ActivatedRoute) { }

  id:number;
  producto:any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['datos'];
    this.buscarProducto(this.id);
  }

  buscarProducto(id:number){
    let res:Observable<Producto> = this.productoServicio.obtenerProductoPorId(id);
    res.subscribe(dato => {
      this.producto = dato;
    }, error => {
      swal.fire('Error',`El producto no existe`,`error`);
      this.router.navigate(['productos']);
    });
  }

  actualizarProducto(id: number) {
    this.router.navigate(['actualizar-producto', id]);
  }
}
