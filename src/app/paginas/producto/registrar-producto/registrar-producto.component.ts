import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/entidades/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent implements OnInit{

  producto:Producto = new Producto();

  constructor(private productoService:ProductoService, private router:Router){}

  ngOnInit(): void {
    this.producto.estado = "disponible";
  }

  irAlaListaDeProductos(){
    this.router.navigate(['/productos']);
    swal.fire('Producto registrado',`El producto ${this.producto.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.productoService.registrarProducto(this.producto).subscribe(dato => {
      this.irAlaListaDeProductos();
    },error => console.log(error));
  }
}
