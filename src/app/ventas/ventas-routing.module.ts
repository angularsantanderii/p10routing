import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioVentasComponent } from './inicio-ventas/inicio-ventas.component';

const routes: Routes = [
  {path: '', component: InicioVentasComponent} // Relativo a "/ventas"
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
