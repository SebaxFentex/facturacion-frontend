import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, isEmpty } from 'rxjs';
import { Cliente } from 'src/app/entidades/cliente';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css']
})
export class BuscarClienteComponent implements OnInit{

  constructor(private clienteServicio: ClienteService, private router: Router, private route: ActivatedRoute) { }

  datos:String;
  cliente:any;

  ngOnInit(): void {
    this.datos = this.route.snapshot.params['datos'];
    this.buscarCliente(this.datos);
  }

  buscarCliente(datos:String){
    let res:Observable<Cliente> = this.clienteServicio.obtenerClientePorIdentificacion(datos);
    res.subscribe(dato => {
      this.cliente = dato;
      if(dato === null){
        this.router.navigate(['clientes']);
        swal.fire('Error',`El cliente no existe`,`error`);
      }
    });
  }

  actualizarCliente(id: number) {
    this.router.navigate(['actualizar-cliente', id]);
  }
}
