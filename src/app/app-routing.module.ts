import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaClientesComponent } from 'src/app/paginas/cliente/lista-clientes/lista-clientes.component';
import { ActualizarClienteComponent } from './paginas/cliente/actualizar-cliente/actualizar-cliente.component';
import { BuscarClienteComponent } from './paginas/cliente/buscar-cliente/buscar-cliente.component';
import { RegistrarClienteComponent } from './paginas/cliente/registrar-cliente/registrar-cliente.component';
import { ListaProductosComponent } from './paginas/producto/lista-productos/lista-productos.component';
import { ListaUsuariosComponent } from './paginas/usuario/lista-usuarios/lista-usuarios.component';
import { ActualizarProductoComponent } from './paginas/producto/actualizar-producto/actualizar-producto.component';
import { BuscarProductoComponent } from './paginas/producto/buscar-producto/buscar-producto.component';
import { RegistrarProductoComponent } from './paginas/producto/registrar-producto/registrar-producto.component';
import { ActualizarUsuarioComponent } from './paginas/usuario/actualizar-usuario/actualizar-usuario.component';
import { BuscarUsuarioComponent } from './paginas/usuario/buscar-usuario/buscar-usuario.component';
import { RegistrarUsuarioComponent } from './paginas/usuario/registrar-usuario/registrar-usuario.component';
import { VentaComponent } from './paginas/venta/venta/venta.component';

const routes: Routes = [

  { path: '', redirectTo: 'clientes', pathMatch: 'full' },

  { path: 'clientes', component: ListaClientesComponent },
  { path: 'actualizar-cliente/:id', component: ActualizarClienteComponent },
  { path: 'buscar-cliente/:datos', component: BuscarClienteComponent },
  { path: 'registrar-cliente', component: RegistrarClienteComponent },

  { path: 'productos', component: ListaProductosComponent },
  { path: 'actualizar-producto/:id', component: ActualizarProductoComponent },
  { path: 'buscar-producto/:datos', component: BuscarProductoComponent },
  { path: 'registrar-producto', component: RegistrarProductoComponent },

  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'actualizar-usuario/:id', component: ActualizarUsuarioComponent },
  { path: 'buscar-usuario/:datos', component: BuscarUsuarioComponent },
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },

  { path: 'venta', component: VentaComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
