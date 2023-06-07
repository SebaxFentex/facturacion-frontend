import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './paginas/usuario/lista-usuarios/lista-usuarios.component';
import { ListaClientesComponent } from './paginas/cliente/lista-clientes/lista-clientes.component';
import { ActualizarClienteComponent } from './paginas/cliente/actualizar-cliente/actualizar-cliente.component';
import { FormsModule } from '@angular/forms';
import { BuscarClienteComponent } from './paginas/cliente/buscar-cliente/buscar-cliente.component';
import { RegistrarClienteComponent } from './paginas/cliente/registrar-cliente/registrar-cliente.component';
import { ListaProductosComponent } from './paginas/producto/lista-productos/lista-productos.component';
import { BuscarProductoComponent } from './paginas/producto/buscar-producto/buscar-producto.component';
import { RegistrarProductoComponent } from './paginas/producto/registrar-producto/registrar-producto.component';
import { ActualizarProductoComponent } from './paginas/producto/actualizar-producto/actualizar-producto.component';
import { BuscarUsuarioComponent } from './paginas/usuario/buscar-usuario/buscar-usuario.component';
import { ActualizarUsuarioComponent } from './paginas/usuario/actualizar-usuario/actualizar-usuario.component';
import { RegistrarUsuarioComponent } from './paginas/usuario/registrar-usuario/registrar-usuario.component';
import { VentaComponent } from './paginas/venta/venta/venta.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    ListaClientesComponent,
    ActualizarClienteComponent,
    BuscarClienteComponent,
    RegistrarClienteComponent,
    ListaProductosComponent,
    BuscarProductoComponent,
    RegistrarProductoComponent,
    ActualizarProductoComponent,
    BuscarUsuarioComponent,
    ActualizarUsuarioComponent,
    RegistrarUsuarioComponent,
    VentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
