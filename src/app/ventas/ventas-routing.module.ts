import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaClientesComponent } from './clientes/tabla-clientes/tabla-clientes.component';
import { VisualizarClienteComponent } from './clientes/visualizar-cliente/visualizar-cliente.component';
import { InicioVentasComponent } from './inicio-ventas/inicio-ventas.component';

const routes: Routes = [
  {path: '', component: InicioVentasComponent}, // Relativo a "/ventas"
  {path: 'tabla-clientes', component: TablaClientesComponent},
  {path: 'visualizar-cliente/:id', component: VisualizarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
