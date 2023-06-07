import  swal  from 'sweetalert2';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { Cliente } from 'src/app/entidades/cliente';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit{

  id:number;
  cliente:Cliente = new Cliente();
  constructor(private clienteService:ClienteService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteService.obtenerClientePorId(this.id).subscribe(dato =>{
      this.cliente = dato;
    },error => console.log(error));
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/clientes']);
    swal.fire('Cliente actualizado',`El cliente ${this.cliente.razonSocial} ha sido actualizado con exito`,`success`);
  }


  onSubmit(){
    // Traducir de "Activo" -> "a" o de "Inactivo" -> "i". La BD en cliente.estado recibe varchar(1)
    this.cliente.estado = this.cliente.estado.toLowerCase().substring(0,1);

    this.clienteService.actualizarCliente(this.id,this.cliente).subscribe(dato => {
      this.irAlaListaDeEmpleados();
    },error => console.log(error));
  }
}
