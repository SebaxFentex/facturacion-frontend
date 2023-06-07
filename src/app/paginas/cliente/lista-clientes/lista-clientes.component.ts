import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/entidades/cliente';
import { TipoIdentificacion } from 'src/app/entidades/tipoIdentificacion';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TipoIdService } from 'src/app/services/tipoId/tipo-id.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes: any[];
  clienteBuscar:Cliente = new Cliente();

  constructor(private clienteServicio: ClienteService,  private router: Router) { }

  ngOnInit(): void {
    this.obtenerClientes();
    this.clienteBuscar.tipoIdentificacion.abreviatura = "CC";

  }

  actualizarCliente(id: number) {
    this.router.navigate(['actualizar-cliente', id]);
  }

  registrarCliente(){

    this.router.navigate(['registrar-cliente']);
  }

  private obtenerClientes() {
    this.clienteServicio.obtenerListaDeClientes().subscribe(dato => {
      this.clientes = dato;
    });
  }

  verDetallesDelCliente(cliente:Cliente) {
    let ruta = cliente.tipoIdentificacion.abreviatura + "-" + cliente.id.toString();
    this.router.navigate(['buscar-cliente', ruta]);
  }

  actualizarIdClienteBuscar(event: Event){
    const element = event.target as HTMLInputElement;
    this.clienteBuscar.id = +element.value;
  }
}
