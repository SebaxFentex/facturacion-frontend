import swal from 'sweetalert2';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/entidades/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent {
  id:number;
  producto:Producto = new Producto();
  constructor(private productoService:ProductoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productoService.obtenerProductoPorId(this.id).subscribe(dato =>{
      this.producto = dato;
    },error => console.log(error));
  }

  irAlaListaDeProductos(){
    this.router.navigate(['/productos']);
    swal.fire('Producto actualizado',`El producto ${this.producto.nombre} ha sido actualizado con exito`,`success`);
  }


  onSubmit(){
    this.productoService.actualizarProducto(this.id,this.producto).subscribe(dato => {
      this.irAlaListaDeProductos();
    },error => console.log(error));
  }
}
