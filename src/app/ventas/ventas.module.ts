import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { InicioVentasComponent } from './inicio-ventas/inicio-ventas.component';
import { ClientesService } from './clientes.service';
import { TablaClientesComponent } from './clientes/tabla-clientes/tabla-clientes.component';
import { VisualizarClienteComponent } from './clientes/visualizar-cliente/visualizar-cliente.component';


@NgModule({
  declarations: [
    InicioVentasComponent,
    TablaClientesComponent,
    VisualizarClienteComponent,
  ],
  imports: [
    CommonModule,
    VentasRoutingModule
  ],
  providers: [
    ClientesService
  ]
})

export class VentasModule { }
