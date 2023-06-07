import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/entidades/cliente';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TipoIdService } from 'src/app/services/tipoId/tipo-id.service';
import { TipoIdentificacion } from 'src/app/entidades/tipoIdentificacion';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit{

  cliente:Cliente = new Cliente();
  tiposId:TipoIdentificacion[];

  constructor(private clienteService:ClienteService, private tipoIdService:TipoIdService, private router:Router){}

  ngOnInit(): void {
    this.cliente.tipoIdentificacion.abreviatura = "CC";
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/clientes']);
    swal.fire('Cliente registrado',`El cliente ${this.cliente.razonSocial} ha sido registrado con exito`,`success`);
  }

  onSubmit(){

    // Es preferible obtener estos datos con el servicio de tipoIdentificacion, pero por falta de tiempo tuvo que ser de esta forma.
    let tiposId:any = {};
    tiposId["CC"] = "1";
    tiposId["TI"] = "2";
    tiposId["PAS"] = "3";
    tiposId["NIT"] = "4";
    tiposId["PEP"] = "5";

    this.cliente.estado = "a";
    this.cliente.fechaRegistro = new Date();
    this.cliente.tipoIdentificacion.id = tiposId[this.cliente.tipoIdentificacion.abreviatura];

    this.clienteService.registrarCliente(this.cliente).subscribe(dato => {
      this.irAlaListaDeEmpleados();
    },error => console.log(error));
  }

}
